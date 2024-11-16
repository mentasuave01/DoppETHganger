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

  // Memoize deployToChain function
  const deployToChain = useCallback(
    async (chainIndex: number) => {
      if (chainIndex >= rOptions.length) {
        setStatus("deployed");
        return;
      }

      try {
        setStatus("deploying");
        //delete localstorage
        localStorage.removeItem("appSalt");
        await sendCC({
          address: CONTRACTS.verify_ADDRESS[rOptions[chainIndex].chainId],
          abi: CONTRACTS.verify_ABI,
          functionName: "send",
          args: [rOptions[chainIndex].chainId, salt],
          value: 1000000000000000n,
        }).then((tx) => {
          toast({
            description: "tx sent" + tx,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setStatus("deployed");
        });

        if (isSuccess) {
          setCurrentChainIndex((prev) => prev + 1);
          deployToChain(chainIndex + 1);
        }
      } catch (error) {
        console.error(
          `Deployment failed for chain ${rOptions[chainIndex].chainId}:`,
          error
        );
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
          {saltyAddress}
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

      {status === "verified" && (
        <button className="customConnect check" onClick={handleDeploy}>
          Deploy
        </button>
      )}
    </div>
  );
};

export default Checking;
