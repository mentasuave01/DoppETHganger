import React from "react";
import separador from "@/assets/separador.svg";
import howDoesItWork from "@/assets/howDoesItWork.svg";
import about from "@/assets/about.svg";
import legalImplications from "@/assets/legalImplications.svg";

const DialogMenu: React.FC = () => {
  return (
    <div className="absolute bottom-16 w-full left-0 ">
      <img src={separador} alt="separador" className="w-full mt-8" />

      <div className="w-full flex justify-around mt-4 gap-8">
        <img src={howDoesItWork} alt="howDoesItWork" />
        <img src={about} alt="about" />

        <img src={legalImplications} alt="legalImplications" />
      </div>
      <img src={separador} alt="separador" className="w-full mt-4" />
      <div />
    </div>
  );
};

export default DialogMenu;
