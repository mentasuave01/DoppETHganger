import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import React from "react";
import { useAccount } from "wagmi";

const DynamicConnectButton: React.FC = () => {
  const { isConnected } = useAccount();
  const { setShowAuthFlow } = useDynamicContext();
  return (
    <div className="w-full flex justify-center mt-10  gap-8">
      {!isConnected && (
        <button className="customConnect" onClick={() => setShowAuthFlow(true)}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default DynamicConnectButton;
