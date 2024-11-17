import React from "react";
import separador from "@/assets/separador.svg";
import howDoesItWork from "@/assets/howDoesItWork.svg";
import about from "@/assets/about.svg";
import legalImplications from "@/assets/legalImplications.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const DialogMenu: React.FC = () => {
  return (
    <div className="absolute bottom-16 w-full left-0 ">
      <img src={separador} alt="separador" className="w-full mt-8" />

      <div className="w-full flex justify-around mt-4 gap-8">
        <Dialog>
          <DialogTrigger className="bg-red-500/35">
            {" "}
            <img src={legalImplications} alt="legalImplications" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle> LEGAL IMPLICATONS</DialogTitle>
              <DialogDescription className="mt-4 space-y-4 text-left">
                <h3 className="text-lg font-semibold text-gray-500 mb-2">
                  What is an address collision?
                </h3>

                <div className="space-y-3 text-gray-400">
                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Collisions relevance from a Legal Perspective
                  </p>

                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Who is responsible for collisions?
                  </p>

                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Liability for not implementing verification systems
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="bg-red-500/0">
            {" "}
            <img src={about} alt="about" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ATTACK VECTORS</DialogTitle>
              <DialogDescription className="space-y-6 p-4">
                paco
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="bg-yellow-500/35">
            {" "}
            <img src={howDoesItWork} alt="howDoesItWork" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ATTACK VECTORS</DialogTitle>
              <DialogDescription>
                <div className="space-y-4 mt-5">
                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        1
                      </span>
                      CA Hijacking
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      A malicious user can execute a constructor with the same
                      'salt' than some DAO or User effectively used, for
                      example, to create their SAFE with the CREATE2 function in
                      some chain, with the objective of deploy a 'fake' contract
                      on the same address but in different chains where the
                      constructor is available.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        2
                      </span>
                      Atomic Funding Lock
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      A very simple but effective attack performed -usually- by
                      a troll is to initialize an specific EOA address sending
                      just 1 wei to it in different chains to avoid anyone to
                      deploy a CA on that memory address in some chains. This
                      address to fund is the one pre-calculated with CREATE2 by
                      a DAO or a 'pretty' organized User for his AA wallet with
                      the objective of having an homogenous CA across the whole
                      EVM ecosystem.
                    </p>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <img src={separador} alt="separador" className="w-full mt-4" />

      <div />
    </div>
  );
};

export default DialogMenu;
