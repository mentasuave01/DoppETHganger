# compare_addresses.py

import asyncio
import aiohttp
import json
from config import API_URLS

# Limit of concurrent requests per address
CONCURRENCY_LIMIT = 10  # Reduced concurrency for slower processing
# Request timeout in seconds
REQUEST_TIMEOUT = 20
# Requests per second limit
REQUESTS_PER_SECOND = 2  # Reduced rate for slower processing
# Maximum number of retries
MAX_RETRIES = 5
# Base wait time between retries in seconds
RETRY_DELAY = 10
# Batch size of addresses to process simultaneously
BATCH_SIZE = 5  # Reduced batch size for slower processing

def load_contracts(filename):
    contracts = []
    with open(filename, 'r') as f:
        for line in f:
            address = line.strip()
            if address:
                contracts.append(address.lower())
    return contracts

def load_existing_collisions(filename):
    try:
        with open(filename, 'r') as f:
            data = json.load(f)
            existing_collisions = set()
            for collision in data:
                # Create a unique tuple to identify the collision
                collision_id = (collision['address'], collision['origin_chain'], collision['other_chain'], collision['other_type'])
                existing_collisions.add(collision_id)
            return existing_collisions
    except (FileNotFoundError, json.JSONDecodeError):
        return set()

async def get_balance(session, address, api_base_url, api_key='', retries=0):
    try:
        params = {
            'module': 'account',
            'action': 'balance',
            'address': address
        }
        if api_key:
            params['apikey'] = api_key
        async with session.get(api_base_url, params=params, timeout=REQUEST_TIMEOUT) as response:
            data = await response.json()
            if response.status != 200:
                print(f"Error getting balance of address {address} on {api_base_url}: {data.get('message', '')}")
                raise aiohttp.ClientResponseError(status=response.status, request_info=response.request_info, history=response.history)
            if 'result' in data and data['result'] is not None:
                try:
                    balance = int(data['result'])
                    return balance
                except ValueError:
                    print(f"Invalid balance value for address {address} on {api_base_url}: {data['result']}")
                    raise
            else:
                print(f"Unexpected response when getting balance of address {address} on {api_base_url}: {data}")
                raise ValueError("Unexpected response in get_balance")
    except (asyncio.TimeoutError, aiohttp.ClientError, ValueError, KeyError) as e:
        if retries < MAX_RETRIES:
            wait_time = RETRY_DELAY * (2 ** retries)
            print(f"Retrying get_balance for {address} on {api_base_url} in {wait_time} seconds... (Attempt {retries + 1}/{MAX_RETRIES})")
            await asyncio.sleep(wait_time)
            return await get_balance(session, address, api_base_url, api_key, retries + 1)
        else:
            print(f"Failed to get balance of address {address} on {api_base_url} after {MAX_RETRIES} retries: {e}")
            return 0

async def is_contract(session, address, api_base_url, api_key='', retries=0):
    try:
        params = {
            'module': 'contract',
            'action': 'getcontractcreation',
            'contractaddresses': address
        }
        if api_key:
            params['apikey'] = api_key
        async with session.get(api_base_url, params=params, timeout=REQUEST_TIMEOUT) as response:
            data = await response.json()
            if response.status != 200:
                print(f"Error checking if address {address} is a contract on {api_base_url}: {data.get('message', '')}")
                raise aiohttp.ClientResponseError(status=response.status, request_info=response.request_info, history=response.history)
            if 'result' in data and data['result']:
                # If result contains data, it's a contract
                return True
            else:
                return False
    except (asyncio.TimeoutError, aiohttp.ClientError, ValueError, KeyError) as e:
        if retries < MAX_RETRIES:
            wait_time = RETRY_DELAY * (2 ** retries)
            print(f"Retrying is_contract for {address} on {api_base_url} in {wait_time} seconds... (Attempt {retries + 1}/{MAX_RETRIES})")
            await asyncio.sleep(wait_time)
            return await is_contract(session, address, api_base_url, api_key, retries + 1)
        else:
            print(f"Failed to check if address {address} is a contract on {api_base_url} after {MAX_RETRIES} retries: {e}")
            return False

async def has_tokens(session, address, api_base_url, api_key='', retries=0):
    try:
        params = {
            'module': 'account',
            'action': 'tokenlist',
            'address': address
        }
        if api_key:
            params['apikey'] = api_key
        async with session.get(api_base_url, params=params, timeout=REQUEST_TIMEOUT) as response:
            data = await response.json()
            if response.status != 200:
                print(f"Error checking tokens for address {address} on {api_base_url}: {data.get('message', '')}")
                raise aiohttp.ClientResponseError(status=response.status, request_info=response.request_info, history=response.history)
            if 'result' in data:
                if isinstance(data['result'], list) and len(data['result']) > 0:
                    return True  # The address holds tokens
                else:
                    # No tokens found
                    return False
            else:
                print(f"Unexpected response when checking tokens for address {address} on {api_base_url}: {data}")
                return False
    except (asyncio.TimeoutError, aiohttp.ClientError, ValueError, KeyError) as e:
        if retries < MAX_RETRIES:
            wait_time = RETRY_DELAY * (2 ** retries)
            print(f"Retrying has_tokens for {address} on {api_base_url} in {wait_time} seconds... (Attempt {retries + 1}/{MAX_RETRIES})")
            await asyncio.sleep(wait_time)
            return await has_tokens(session, address, api_base_url, api_key, retries + 1)
        else:
            print(f"Failed to check tokens for address {address} on {api_base_url} after {MAX_RETRIES} retries: {e}")
            return False

async def process_address(address, origin_chain, api_info, collisions, airdrop_collisions, session, semaphore, total_addresses, processed_addresses, existing_collisions, existing_airdrop_collisions, lock):
    print(f"Processing address {processed_addresses}/{total_addresses}: {address}")
    tasks = []
    for chain_name, info in api_info.items():
        api_base_url = info['api_url']
        api_key = info.get('api_key', '')
        task = asyncio.create_task(
            check_address(address, origin_chain, chain_name, api_base_url, api_key, collisions, airdrop_collisions, session, semaphore, existing_collisions, existing_airdrop_collisions, lock)
        )
        tasks.append(task)
    await asyncio.gather(*tasks)

async def check_address(address, origin_chain, chain_name, api_base_url, api_key, collisions, airdrop_collisions, session, semaphore, existing_collisions, existing_airdrop_collisions, lock):
    async with semaphore:
        # Wait to not exceed the requests per second limit
        await asyncio.sleep(1 / REQUESTS_PER_SECOND)
        collision = None

        balance = await get_balance(session, address, api_base_url, api_key)
        if balance > 0:
            # The address has a positive balance; it is an initialized EOA or a CA
            is_contr = await is_contract(session, address, api_base_url, api_key)
            if is_contr:
                collision = {
                    'address': address,
                    'origin_chain': origin_chain,
                    'origin_type': 'CA',
                    'other_chain': chain_name,
                    'other_type': 'CA',
                }
            else:
                collision = {
                    'address': address,
                    'origin_chain': origin_chain,
                    'origin_type': 'CA',
                    'other_chain': chain_name,
                    'other_type': 'EOA',
                    'balance': balance,
                }
        else:
            # Balance is zero; could be uninitialized EOA, CA, or non-existent
            is_contr = await is_contract(session, address, api_base_url, api_key)
            if is_contr:
                collision = {
                    'address': address,
                    'origin_chain': origin_chain,
                    'origin_type': 'CA',
                    'other_chain': chain_name,
                    'other_type': 'CA',
                }
            else:
                # Check if the address holds tokens
                has_tok = await has_tokens(session, address, api_base_url, api_key)
                if has_tok:
                    # Address is an uninitialized EOA with tokens (airdrop)
                    collision = {
                        'address': address,
                        'origin_chain': origin_chain,
                        'origin_type': 'CA',
                        'other_chain': chain_name,
                        'other_type': 'EOA',
                        'has_tokens': True,
                    }
                    collision_id = (collision['address'], collision['origin_chain'], collision['other_chain'], collision['other_type'])
                    async with lock:
                        if collision_id not in existing_airdrop_collisions:
                            existing_airdrop_collisions.add(collision_id)
                            airdrop_collisions.append(collision)
                            print(f"Airdrop collision found: {address} holds tokens on {chain_name}")
                            # Write to 'not_initialized_but_airdroped.json'
                            await write_collision(collision, 'not_initialized_but_airdroped.json')
                        else:
                            print(f"Airdrop collision already recorded: {address} on {chain_name}")
                    return  # Exit since collision is handled
                else:
                    # Address does not exist or has no activity
                    return  # No collision found

        if collision:
            collision_id = (collision['address'], collision['origin_chain'], collision['other_chain'], collision['other_type'])
            async with lock:
                if collision_id not in existing_collisions:
                    existing_collisions.add(collision_id)
                    collisions.append(collision)
                    print(f"Collision found: {address} is a {collision['other_type']} on {chain_name}")
                    # Write to JSON file
                    await write_collision(collision, f'collisions_{origin_chain}.json')
                else:
                    print(f"Collision already recorded: {address} as {collision['other_type']} on {chain_name}")

async def write_collision(collision, filename):
    # Write the collision to the JSON file
    try:
        with open(filename, 'r') as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        data = []
    data.append(collision)
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

async def main():
    import argparse

    parser = argparse.ArgumentParser(description='Compare contract addresses between blockchains')
    parser.add_argument('--origin_chain', required=True, choices=list(API_URLS.keys()), help='Name of the origin chain')
    parser.add_argument('--contracts_file', required=True, help='File with contract addresses from the origin chain')

    args = parser.parse_args()

    origin_chain = args.origin_chain
    contracts_file = args.contracts_file

    # Load contracts from the origin chain
    origin_contracts = load_contracts(contracts_file)
    print(f"Loaded {len(origin_contracts)} contracts from {origin_chain}")

    # Create the API info dictionary
    api_info = {}
    for chain in API_URLS:
        if chain != origin_chain:
            api_url = API_URLS[chain]['api_url']
            api_key = API_URLS[chain].get('api_key', '')
            api_info[chain] = {'api_url': api_url, 'api_key': api_key}
            print(f"Configured API for {chain}: {api_url}")

    # Lists to store collisions
    collisions = []
    airdrop_collisions = []

    # Counter of processed addresses
    total_addresses = len(origin_contracts)
    processed_addresses = 0

    # Semaphore to limit concurrent requests
    semaphore = asyncio.Semaphore(CONCURRENCY_LIMIT)

    # Load existing collisions
    collisions_filename = f'collisions_{origin_chain}.json'
    existing_collisions = load_existing_collisions(collisions_filename)

    # Load existing airdrop collisions
    airdrop_filename = 'not_initialized_but_airdroped.json'
    existing_airdrop_collisions = load_existing_collisions(airdrop_filename)

    # Lock for writing to the files and modifying existing collision sets
    lock = asyncio.Lock()

    async with aiohttp.ClientSession() as session:
        for i in range(0, len(origin_contracts), BATCH_SIZE):
            batch_addresses = origin_contracts[i:i+BATCH_SIZE]
            tasks = []
            for address in batch_addresses:
                processed_addresses += 1
                await process_address(address, origin_chain, api_info, collisions, airdrop_collisions, session, semaphore, total_addresses, processed_addresses, existing_collisions, existing_airdrop_collisions, lock)

    print(f"Total collisions found: {len(collisions)}")
    print(f"Collisions saved in {collisions_filename}")
    print(f"Total airdrop collisions found: {len(airdrop_collisions)}")
    print(f"Airdrop collisions saved in {airdrop_filename}")

if __name__ == "__main__":
    asyncio.run(main())
