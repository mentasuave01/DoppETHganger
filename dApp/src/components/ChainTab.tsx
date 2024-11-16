import React, { useState } from "react";
import getStatusImage from "../utils/getStatusImage";
import getChainTab from "../utils/getChainTab";

interface ChainTabProps {
  chain: number;
}

const ChainTab: React.FC<ChainTabProps> = ({ chain = 1301 }) => {
  const [status, setStatus] = useState("waiting");
  return (
    <div className="chainTab">
      <img src={getChainTab(chain)} alt="chainLogo" width="100%" />
      <img
        src={getStatusImage(status)}
        alt="status"
        width="30px"
        className="absolute bottom-4 right-3 z-10"
      />
    </div>
  );
};

export default ChainTab;
