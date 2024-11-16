import React from "react";
import dopperLogo from "@/assets/dopperLogo.svg";
const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-3 absolute bottom-0 w-full justify-center align-middle items-center px-4 	">
      <div className="flex justify-start">
        Crafted at ETH Global Bangkok by:
      </div>

      <div className="flex justify-center">
        <img
          className="flex justify-center "
          src={dopperLogo}
          alt="dopper logo"
        />
      </div>
      <div className="flex justify-end">Doppeth.com</div>
    </div>
  );
};

export default Footer;
