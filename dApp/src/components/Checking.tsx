import React from "react";
import checking from "@/assets/checking.webp";
import DynamicConnectButton from "./DynamicConnectButton";
import ChainTab from "./ChainTab";

const Checking: React.FC = () => {
  const options = [534351, 48899, 1301, 25925];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <img src={checking} alt="checking" width={130} />
      <div className="w-fit -mt-4 glowyEffect">
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
