import React, { useState } from "react";

import areYou from "@/assets/couldthis.webp";

import DynamicConnectButton from "./DynamicConnectButton";
import { useAccount } from "wagmi";
import Header from "./Header";
import DialogMenu from "./DialogMenu";
import Checking from "./Checking";
import Collisions from "./Collisions";

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
            <Collisions />
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
