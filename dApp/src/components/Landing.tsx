import React, { useState } from "react";

import areYou from "@/assets/couldthis.webp";

import DynamicConnectButton from "./DynamicConnectButton";
import { useAccount } from "wagmi";
import Header from "./Header";
import DialogMenu from "./DialogMenu";
import Checking from "./Checking";

const Landing: React.FC = () => {
  const { address } = useAccount();
  const [sentMeToTheMoon, setSentMeToTheMoon] = useState(false);
  const handleCheck = () => {
    setSentMeToTheMoon(true);
    console.log("Sent me to the moon", sentMeToTheMoon);
  };

  return (
    <>
      <div id="dapp" className="dappContainer">
        <Header />
        {!sentMeToTheMoon ? (
          <>
            {" "}
            <div className="w-full flex justify-center mt-4">
              <img src={areYou} alt="are you" />
            </div>
            <div id="chainContainers">
              <div className="w-full flex justify-center mt-2 gap-8">
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
            <div className="w-full flex justify-center items-center gap-4">
              <div className="w-fit -mt-4">
                <DynamicConnectButton />
              </div>
              {address && (
                <button
                  className="customConnect check"
                  onClick={() => handleCheck()}
                >
                  Check
                </button>
              )}
            </div>{" "}
          </>
        ) : (
          <Checking />
        )}
        <DialogMenu />
      </div>
    </>
  );
};

export default Landing;
