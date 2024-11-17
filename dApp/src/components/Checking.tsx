import React, { useEffect, useState, useCallback } from "react";
import checking from "@/assets/checking.webp";
import ChainTab from "./ChainTab";
import { randomInt } from "../utils/getRandomKiddo";
import { useAccount, useWriteContract } from "wagmi";
import { CONTRACTS } from "../company";
import { useReadContract } from "wagmi";
import { delay } from "../utils/getDelay";
import { checkAddressStatus } from "../utils/checkAddressStatus";
import { useToast } from "../hooks/use-toast";

type DeploymentStatus = "checking" | "verified" | "deploying" | "deployed";

interface BlockchainOption {
  chainId: number;
  status: string;
}

const Checking: React.FC = () => {
  const { toast } = useToast();
  const { chainId } = useAccount();

  const [options, setOptions] = useState<BlockchainOption[]>([
    { chainId: 48899, status: "checking" },
    { chainId: 25925, status: "checking" },
    { chainId: 1301, status: "checking" },
    { chainId: 534351, status: "checking" },
  ]);

  const [rOptions, setrOptions] = useState<BlockchainOption[]>([
    { chainId: 48899, status: "checking" },
    { chainId: 1301, status: "checking" },
    { chainId: 534351, status: "checking" },
  ]);

  const [status, setStatus] = useState<DeploymentStatus>("checking");
  const storedSalt = localStorage.getItem("appSalt");
  const [salt, setSalt] = useState(storedSalt ? parseInt(storedSalt) : 0);
  const { writeContractAsync: sendCC, isSuccess } = useWriteContract();
  const [currentChainIndex, setCurrentChainIndex] = useState(0);
  const [txHash, setTxHash] = useState("");

  // Memoize deployToChain function
  const deployToChain = useCallback(
    async (chainIndex: number) => {
      if (chainIndex >= rOptions.length) {
        setStatus("deployed");
        return;
      }

      localStorage.removeItem("appSalt");
      sendCC({
        address: CONTRACTS.verify_ADDRESS[rOptions[chainIndex].chainId],
        abi: CONTRACTS.verify_ABI,
        functionName: "send",
        args: [rOptions[chainIndex].chainId, salt],
        value: 1000000000000000n,
      }).then((tx) => {
        toast({
          description: "tx sent" + tx,
          title: "Transaction Sent",
        });
        setTxHash(tx);
        setStatus("deployed");
        setCurrentChainIndex((prev) => prev + 1);
        deployToChain(chainIndex + 1);
        alert("Deployed");
      });

      if (isSuccess) {
        setCurrentChainIndex((prev) => prev + 1);
        deployToChain(chainIndex + 1);
      }
    },
    [rOptions, salt, sendCC, isSuccess, toast]
  );

  const handleDeploy = useCallback(() => {
    setStatus("checking");
    deployToChain(currentChainIndex);
  }, [currentChainIndex, deployToChain]);

  const { data: saltyAddress } = useReadContract({
    address: CONTRACTS.proxyFactory_ADDRESS[chainId as number],
    abi: CONTRACTS.proxyFactory_ABI,
    functionName: "calculateProxyAddress",
    args: [salt],
    chainId: chainId as number,
    query: {
      enabled: Boolean(salt),
      refetchInterval: 2500,
    },
  });

  // Combine salt initialization into one effect
  useEffect(() => {
    if (!storedSalt) {
      const newSalt = randomInt();
      localStorage.setItem("appSalt", newSalt.toString());
      setSalt(newSalt);
    }
  }, []);

  // Filter rOptions based on chainId changes
  useEffect(() => {
    setrOptions((prev) => prev.filter((option) => option.chainId !== chainId));
  }, [chainId]);

  // Handle address status checks
  useEffect(() => {
    if (!saltyAddress) return;

    const checkStatuses = async () => {
      const updatedOptions = await Promise.all(
        options.map(async (option) => {
          const status = await checkAddressStatus(
            saltyAddress as string,
            option.chainId
          );
          return {
            ...option,
            status: status === "empty" ? "safe" : "safe",
          };
        })
      );

      await delay(2000);
      setOptions(updatedOptions);
      setStatus("verified");
    };

    checkStatuses();
  }, [saltyAddress]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {status === "checking" && (
        <img src={checking} alt="checking" width={130} />
      )}
      {status === "verified" && (
        <div className="text-white bg-black rounded-2xl p-2 mt-10 glowyEffect">
          {saltyAddress as string}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-4 max-w-[610px]">
        {options.map((option) => (
          <ChainTab
            key={option.chainId}
            chain={option.chainId}
            status={option.status}
          />
        ))}
      </div>
      {txHash && (
        <div className="w-full max-w-lg mx-auto mt-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-500">Transaction Sent</span>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(txHash)}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                Copy Hash
              </button>
            </div>

            <div className="mt-2 font-mono text-sm text-gray-700 break-all">
              {txHash}
            </div>

            <a
              href={`https://etherscan.io/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View on Explorer
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
      {status === "verified" && (
        <button className="customConnect check" onClick={handleDeploy}>
          Deploy
        </button>
      )}
    </div>
  );
};

export default Checking;
