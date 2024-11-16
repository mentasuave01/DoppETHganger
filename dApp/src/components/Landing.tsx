import React from "react";

import dopperHeader from "@/assets/dopperHead.svg";
import separador from "@/assets/separador.svg";
import areYou from "@/assets/areyou.svg";
import mainBack from "@/assets/mainBack.webp";
import howDoesItWork from "@/assets/howDoesItWork.svg";
import legalImplications from "@/assets/legalImplications.svg";
import about from "@/assets/about.svg";
import DynamicConnectButton from "./DynamicConnectButton";
import { useAccount } from "wagmi";

interface LandingProps {
  // Define your props here
}

const Landing: React.FC<LandingProps> = (props) => {
  const { address } = useAccount();
  return (
    <>
      <div id="dapp" className="dappContainer">
        <img src={dopperHeader} alt="dopper header" className="w-full" />
        <div className="w-full flex justify-between font-Montserrat">
          <h3>November 2024</h3>
          <h3>ETH Global, Bangkok, Thailand 2024</h3>
        </div>
        <img src={separador} alt="separador" className="w-full" />
        <div className="w-full flex justify-center mt-8">
          <img src={areYou} alt="are you" />
        </div>
        <div id="chainContainers">
          <div className="w-full flex justify-center mt-4 gap-8">
            <div id="chainOne" className="dopperChainBadge">
              EOA: Base
            </div>
            <div id="chainTwo" className="dopperChainBadge">
              CA: Mainnet
            </div>
          </div>
          <div className="w-full flex justify-center mt-4 gap-8">
            <div id="addressOne" className="dopperAddressBadge">
              0xb8D98a102b0079B69FFbc760C8d857A31653e56e
            </div>
            <div id="addressTwo" className="dopperAddressBadge">
              0xb8D98a102b0079B69FFbc760C8d857A31653e56e
            </div>
          </div>
        </div>
        <DynamicConnectButton />
        <img src={separador} alt="separador" className="w-full" />

        <div className="w-full flex justify-around mt-4 gap-8">
          <img src={howDoesItWork} alt="howDoesItWork" />
          <img src={about} alt="about" />

          <img src={legalImplications} alt="legalImplications" />
        </div>
        <img src={separador} alt="separador" className="w-full" />
      </div>
    </>
  );
};

export default Landing;
