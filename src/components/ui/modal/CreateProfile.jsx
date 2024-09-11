import { Button, Dialog, DialogPanel, DialogTitle, Textarea } from "@headlessui/react";
import { useState } from "react";
import user from "../../../assets/user.png";

import Close from "../../../icons/Close";

export default function CreateProfile({ isOpenProfile, closeProfile }) {
  return (
    <>
      <Dialog
        open={isOpenProfile}
        as="div"
        className="relative z-[100] focus:outline-none"
        onClose={closeProfile}
      >
        <div className="fixed inset-0  w-screen overflow-y-auto">
          <div className="flex md:h-auto h-[871px]  md:items-center items-end md:justify-center bg-[#00000052] backdrop-blur-[2px] md:p-4">
            <DialogPanel
              transition
              className="relative z-[200] w-full md:max-w-[400px] bg-gray-900 rounded-[12px] duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="py-6 border-b border-gray-700">
                <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
                  Create Profile
                </h4>

                <button
                  OnClick={closeProfile}
                  className="absolute right-6 top-7"
                >
                  <Close />
                </button>
              </div>
              <div className="p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-[64px] h-[64px] rounded-full">
                      <img
                        src={user}
                        alt="user"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <h5 className="font-onest text-xs leading-[-0.24px] p-2 bg-gray-800 text-white rounded-[8px]">
                      Update Picture
                    </h5>
                  </div>
                </div>
                <form className="pt-4 flex flex-col gap-4">
                  <div>
                    <div>
                      <label className="text-lg font-onest text-gray-200">
                        Username
                      </label>
                    </div>
                    <div className="flex items-center gap-2 font-onest">
                      <div className=" w-[60%] h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                        <input
                          type="text"
                          placeholder="johnnnyyy"
                          className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                        />
                      </div>
                      <div className=" w-[40%] h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="text-lg font-onest text-gray-200">
                        Fullname
                      </label>
                    </div>
                    <div className="flex items-center gap-2 font-onest">
                      <div className=" w-full h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label className="text-lg font-onest text-gray-200">
                        Bio
                      </label>
                    </div>
                    <div className="flex items-center gap-2 font-onest">
                      <div className=" w-full h-[120px] bg-gray-800 border border-gray-700 rounded-[8px]">
                        <Textarea
                          type="text"
                          placeholder="John Doe"
                          className="font-medium w-full h-full pt-3 outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="thunder_bold bg-gray-600 w-full h-[52px] rounded-[8px] text-xl text-white/50 font-bold">
                    Continue
                  </button>
                </form>
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
