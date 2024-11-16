// Types for API responses
interface BlockscoutContractResponse {
  result: Array<any>;
}

interface BlockscoutBalanceResponse {
  result: string;
}

interface BitkubAddressResponse {
  is_contract: boolean;
  coin_balance: string;
}

interface JsonRpcResponse {
  result: string;
}

export const checkAddressStatus = async (
  address: string,
  blockchain: number
): Promise<string> => {
  address = address.toLowerCase();

  try {
    if (blockchain === 534351 || blockchain === 1301) {
      const apiBaseUrl =
        blockchain === 534351
          ? "https://scroll.blockscout.com/api"
          : "https://unichain.blockscout.com/api";

      // Step 1: Check if it's a contract
      const contractResponse = await fetch(
        `${apiBaseUrl}?module=contract&action=getcontractcreation&contractaddresses=${address}`
      );
      const contractData =
        (await contractResponse.json()) as BlockscoutContractResponse;

      if (contractData?.result?.length > 0) {
        return "ca_deployed";
      }

      // Step 2: Check balance
      const balanceResponse = await fetch(
        `${apiBaseUrl}?module=account&action=balance&address=${address}`
      );
      const balanceData =
        (await balanceResponse.json()) as BlockscoutBalanceResponse;

      if (balanceData?.result && parseInt(balanceData.result, 10) > 0) {
        return "eoa_initialized";
      }
      return "empty";
    } else if (blockchain === 48899) {
      const rpcUrl = "https://zircuit-mainnet.drpc.org";

      // Step 1: Check if it's a contract
      const codeResponse = await fetch(rpcUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getCode",
          params: [address, "latest"],
          id: 1,
        }),
      });
      const codeData = (await codeResponse.json()) as JsonRpcResponse;

      if (codeData?.result !== "0x") {
        return "ca_deployed";
      }

      // Step 2: Check balance
      const balanceResponse = await fetch(rpcUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBalance",
          params: [address, "latest"],
          id: 1,
        }),
      });
      const balanceData = (await balanceResponse.json()) as JsonRpcResponse;

      if (balanceData?.result && parseInt(balanceData.result, 16) > 0) {
        return "eoa_initialized";
      }
      return "empty";
    } else if (blockchain === 25925) {
      const apiBaseUrl = "https://www.bkcscan.com/api";
      const response = await fetch(`${apiBaseUrl}/addresses/${address}`);
      const data = (await response.json()) as BitkubAddressResponse;

      if (data?.is_contract) {
        return "ca_deployed";
      }

      if (data?.coin_balance && parseFloat(data.coin_balance) > 0) {
        return "eoa_initialized";
      }
      return "empty";
    }

    return "Unsupported blockchain";
  } catch (error) {
    console.error("Error checking address status:", error);
    return "empty";
  }
};
