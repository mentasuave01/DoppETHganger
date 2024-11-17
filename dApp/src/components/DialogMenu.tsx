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
                <div className="space-y-3 text-gray-400">
                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    {" "}
                    What is an address collision?
                  </p>
                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Collisions relevance from a Legal Perspective
                  </p>

                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Who is responsible for collisions?
                  </p>

                  <p className="leading-relaxed border-l-4 border-gray-200 pl-4">
                    Liability for not implementing verification systems
                  </p>

                  <div className="flex items-center justify-between mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <a
                      href="https://github.com/mentasuave01/DoppETHganger/blob/main/docs/doppelgangethLEGAL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Read Full Legal Document
                    </a>

                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent("https://github.com/mentasuave01/DoppETHganger/blob/main/docs/doppelgangethLEGAL.pdf")}`}
                      alt="QR Code for legal document"
                      className="w-20 h-20 rounded-lg shadow-sm"
                    />
                  </div>
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
              <DialogTitle>ABOUT</DialogTitle>
              <DialogDescription className="space-y-6 p-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 shadow-sm border border-gray-200">
                  <p className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
                    Protect your CA cross chain EVM address against{" "}
                    <span className="text-blue-600 font-semibold">
                      'CREATE2'
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 font-semibold">
                      'EOA initializing'
                    </span>{" "}
                    attacks deploying an upgradable proxy CA for any kind of
                    future usage now!
                  </p>

                  <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-lg border border-gray-100">
                    <a
                      href="https://github.com/mentasuave01/DoppETHganger/blob/main/docs/doppelgangethFAQ.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Read Full FAQ Document
                    </a>

                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent("https://github.com/mentasuave01/DoppETHganger/blob/main/docs/doppelgangethFAQ.pdf")}`}
                      alt="QR Code for FAQ document"
                      className="w-20 h-20 rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-3">
                      Crafted at ETH Global Bangkok by
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "mentasuave01",
                        "victorxva",
                        "CelicTorresz",
                        "ariutokintumi",
                        "jistro",
                      ].map((name) => (
                        <a
                          key={name}
                          href={`https://twitter.com/${name}`}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          @{name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
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
