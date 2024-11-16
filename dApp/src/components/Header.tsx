import React from "react";
import dopperHeader from "@/assets/dopperHead.svg";
import separador from "@/assets/separador.svg";
import { useAccount } from "wagmi";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Header: React.FC = () => {
  const { address } = useAccount();
  return (
    <header>
      <img src={dopperHeader} alt="dopper header" className="w-full" />
      <div className="w-full flex justify-between font-Montserrat">
        <h3>November 2024</h3>
        <h3>ETH Global, Bangkok, Thailand 2024</h3>
      </div>
      <img src={separador} alt="separador" className="w-full" />
      {address && (
        <div className="w-full flex justify-end">
          <DynamicWidget />
        </div>
      )}
    </header>
  );
};

export default Header;
