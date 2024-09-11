import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import metamask from "../../../assets/metamask.svg"
import trustwallet from "../../../assets/trustwallet.svg"
import others from "../../../assets/others.svg"
import Close from "../../../icons/Close";

export default function ConnectWallet({isOpen,close}) {


  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[100] focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0  w-screen overflow-y-auto">
          <div className="flex md:h-screen h-[871px] md:items-center items-end md:justify-center bg-[#00000052] backdrop-blur-[2px] md:p-4">
            <DialogPanel
              transition
              className="relative z-[200] w-full md:max-w-[400px] bg-gray-900 rounded-[12px] duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="py-6 border-b border-gray-700">
                <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
                  Connect Wallet
                </h4>

                <button OnClick={close} className="absolute right-6 top-7">
                  <Close  />
                </button>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="w-full flex justify-between items-center bg-gray-800 rounded-[8px] p-3">
                  <div className="flex items-center gap-4 ">
                    <img src={metamask} alt="metamask" />
                    <h5 className="text-gray-200 font-medium font-onest text-lg">
                      Metamask
                    </h5>
                  </div>
                  <div className="bg-[#FEFAF5] text-[#F79009] px-2 rounded-[2px] flex justify-center items-center h-[24px]">
                    <h6 className="text-xs font-onest font-semibold uppercase tracking-[-0.24px]">
                      INSTALLED
                    </h6>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center bg-gray-800 rounded-[8px] p-3">
                  <div className="flex items-center gap-4 ">
                    <img src={trustwallet} alt="metamask" />
                    <h5 className="text-gray-200 font-medium font-onest text-lg">
                      Metamask
                    </h5>
                  </div>
                 
                </div>
                <div className="w-full flex justify-between items-center bg-gray-800 rounded-[8px] p-3">
                  <div className="flex items-center gap-4 ">
                    <img src={others} alt="metamask" />
                    <h5 className="text-gray-200 font-medium font-onest text-lg">
                      Metamask
                    </h5>
                  </div>
                  
                </div>
              </div>
              <div className="py-6 px-4 bg-gray-800 border-t border-gray-700">
                <h6 className="font-onest text-sm tracking-[-0.28px] text-gray-500 text-center">
                  By connecting your wallet, you agree to our Terms of Service
                  and Privacy Policy
                </h6>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
