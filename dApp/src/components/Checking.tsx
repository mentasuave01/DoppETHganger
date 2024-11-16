import React, { useEffect, useState } from "react";
import checking from "@/assets/checking.webp";
import ChainTab from "./ChainTab";
import { randomInt } from "../utils/getRandomKiddo";
import { useAccount, useWriteContract } from "wagmi";
import { CONTRACTS } from "../company";
import { useReadContract } from "wagmi";
import { delay } from "../utils/getDelay";

type DeploymentStatus = "checking" | "verified" | "deploying" | "deployed";

const Checking: React.FC = () => {
  const options = [48899, 11155111, 25925, 1301];
  const [status, setStatus] = useState<DeploymentStatus>("checking");
  const { chainId } = useAccount();
  const storedSalt = localStorage.getItem("appSalt");
  const [salt, setSalt] = useState(storedSalt ? parseInt(storedSalt) : 0);
  const { writeContractAsync: sendCC, isSuccess } = useWriteContract();
  const [currentChainIndex, setCurrentChainIndex] = useState(0);

  const deployToChain = async (chainIndex: number) => {
    if (chainIndex >= options.length) {
      setStatus("deployed");
      return;
    }

    try {
      setStatus("deploying");
      localStorage.removeItem("appSalt");
      await sendCC({
        address: CONTRACTS.verify_ADDRESS[options[chainIndex]],
        abi: CONTRACTS.verify_ABI,
        functionName: "send",
        args: [options[chainIndex], salt],
        value: 1000000000000000n,
      }).then((tx) => {
        console.log("tx", tx);
        setStatus("deployed");
      });

      if (isSuccess) {
        setCurrentChainIndex(chainIndex + 1);
        // Recursive call for next chain
        deployToChain(chainIndex + 1);
      }
    } catch (error) {
      console.error(
        `Deployment failed for chain ${options[chainIndex]}:`,
        error
      );
    }
  };

  const handleDeploy = () => {
    setStatus("checking");
    deployToChain(currentChainIndex);
  };

  const { data: saltyAddress } = useReadContract({
    address: CONTRACTS.proxyFactory_ADDRESS[chainId as number],
    abi: CONTRACTS.proxyFactory_ABI,
    functionName: "calculateProxyAddress",
    args: [salt],
    chainId: chainId as number,
    query: {
      enabled: salt ? true : false,
      refetchInterval: 2500,
    },
  });

  useEffect(() => {
    console.log("status:", saltyAddress);
  }, [saltyAddress]);

  useEffect(() => {
    if (!storedSalt) {
      const newSalt = randomInt();
      localStorage.setItem("appSalt", newSalt.toString());
      console.log("Generated new salt:", newSalt);
      setSalt(newSalt);
    } else {
      console.log("Using existing salt:", salt);
    }
  }, [salt]);

  useEffect(() => {
    const fetchData = async () => {
      if (saltyAddress) {
        console.log("saltyAddress:", saltyAddress);
        await delay(2000);

        setStatus("verified");
      }
    };

    fetchData();
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
        {options.map((option) => {
          return <ChainTab chain={option} key={option} status={status} />;
        })}
      </div>
      {status === "verified" && (
        // <img src={checking} alt="checking" width={130} />
        <button className="customConnect check" onClick={() => handleDeploy()}>
          Deploy
        </button>
      )}
    </div>
  );
};

export default Checking;
