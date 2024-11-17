import React from "react";
import getStatusImage from "../utils/getStatusImage";
import getChainTab from "../utils/getChainTab";

interface ChainTabProps {
  chain: number;
  status: string;
}

const ChainTab: React.FC<ChainTabProps> = ({ chain = 1301, status }) => {
  console.log("chain", chain);
  console.log("status", status);
  return (
    <div className="chainTab">
      <img src={getChainTab(chain)} alt="chainLogo" width="100%" />
      <img
        src={getStatusImage(status)}
        alt="status"
        width="30px"
        className={`absolute bottom-4 right-3 z-10 ${
          status === "checking" ? "animate-spin" : ""
        }`}
      />
    </div>
  );
};

export default ChainTab;
