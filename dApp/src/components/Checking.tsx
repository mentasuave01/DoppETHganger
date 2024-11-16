import React from "react";
import checking from "@/assets/checking.webp";
import DynamicConnectButton from "./DynamicConnectButton";
import ChainTab from "./ChainTab";

const Checking: React.FC = () => {
  const options = [534351, 48899, 1301, 25925];

  return (
    <div>
      <img src={checking} alt="checking" />
      <div className="w-fit -mt-4">
        <DynamicConnectButton />
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-[610px]">
        {options.map((option) => {
          return <ChainTab chain={option} />;
        })}
      </div>
    </div>
  );
};

export default Checking;
