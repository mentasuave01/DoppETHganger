import React from "react";
import dopperHeader from "@/assets/dopperHead.svg";
import separador from "@/assets/separador.svg";

interface HeaderProps {
  // Define your props here
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src={dopperHeader} alt="dopper header" className="w-full" />
      <div className="w-full flex justify-between font-Montserrat">
        <h3>November 2024</h3>
        <h3>ETH Global, Bangkok, Thailand 2024</h3>
      </div>
      <img src={separador} alt="separador" className="w-full" />
    </header>
  );
};

export default Header;
