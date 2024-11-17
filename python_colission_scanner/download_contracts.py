# download_contracts.py

from web3 import Web3
from config_scan_blocks import RPC_URLS
import sys

def get_contract_addresses(chain_name, start_block, end_block, filename):
    rpc_url = RPC_URLS[chain_name]
    web3 = Web3(Web3.HTTPProvider(rpc_url))

    if not web3.is_connected():
        print(f"Error: Could not connect to {chain_name}")
        return
    print(f"Connected to {chain_name} at {rpc_url}")

    contract_addresses = set()

    # Open the file once before the loop to write addresses as they are found
    with open(filename, 'w') as f:
        for block_number in range(start_block, end_block + 1):
            try:
                block = web3.eth.get_block(block_number, full_transactions=True)
                for tx in block.transactions:
                    if tx.to is None:
                        # Contract creation transaction
                        receipt = web3.eth.get_transaction_receipt(tx.hash)
                        contract_address = receipt.contractAddress
                        if contract_address:
                            contract_address = contract_address.lower()
                            if contract_address not in contract_addresses:
                                contract_addresses.add(contract_address)
                                # Write the contract address to the file
                                f.write(f"{contract_address}\n")
                                f.flush()  # Ensure the data is written to disk
                                # Print the contract address to the screen
                                print(f"Found contract: {contract_address} in block {block_number}")
                if (block_number - start_block) % 1000 == 0 and block_number != start_block:
                    print(f"{chain_name}: Processed {block_number - start_block} blocks...")
            except Exception as e:
                print(f"Error processing block {block_number} on {chain_name}: {e}")
                continue
    print(f"Total contracts found on {chain_name}: {len(contract_addresses)}")
    print(f"Contract addresses saved in {filename}")

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Download contract addresses from a blockchain')
    parser.add_argument('--chain', required=True, choices=list(RPC_URLS.keys()), help='Name of the chain')
    parser.add_argument('--start_block', type=int, required=True, help='Start block number')
    parser.add_argument('--end_block', type=int, required=True, help='End block number')

    args = parser.parse_args()

    chain_name = args.chain
    start_block = args.start_block
    end_block = args.end_block

    print(f"Downloading contract addresses from {chain_name}, blocks {start_block} to {end_block}")

    filename = f"contracts_{chain_name}_{start_block}_{end_block}.txt"

    get_contract_addresses(chain_name, start_block, end_block, filename)
