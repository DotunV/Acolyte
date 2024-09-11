import { Button, Dialog, DialogPanel, Textarea } from "@headlessui/react";
import { useState } from "react";
import user from "../../../assets/user.png";
import Close from "../../../icons/Close";
import verification from "../../../assets/verification.png";
import image from "../../../assets/image.svg";
import back from "../../../assets/back.png";
import aco from "../../../assets/aco.svg";

export default function CreateSwiss({ isOpenSwiss, closeSwiss }) {
  return (
    <>
      <Dialog
        open={isOpenSwiss}
        as="div"
        className="relative z-[100] focus:outline-none"
        onClose={closeSwiss}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="">
            <div className="flex md:h-full h-[871px] md:items-center items-end md:justify-center bg-[#00000052] font-onest backdrop-blur-[2px] md:p-4">
              <DialogPanel
                transition
                className="relative z-[200] w-full md:max-w-[640px] bg-gray-900 rounded-[12px] duration-300 ease-out"
              >
                <div className="p-6 border-b border-gray-700 flex justify-between items-center ">
                  <img src={back} />
                  <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
                    Create Post
                  </h4>

                  <button onClick={closeSwiss} className="">
                    <Close />
                  </button>
                </div>
                <form className="pt-4 flex flex-col gap-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="w-[56px] h-[56px] rounded-full">
                      <img src={user} className="w-full h-full rounded-full" />
                    </div>
                    <div className=" px-2 h-[32px] rounded-[8px] bg-gray-800 flex items-center gap-2">
                      <h5 className="text-xs text-white">Noyi24_7</h5>
                      <img src={verification} />
                    </div>
                  </div>
                  <div>
                    <label className="text-lg font-onest text-gray-200">
                      Title
                    </label>
                    <div className="flex font-onest">
                      <div className="w-full h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                        <input
                          type="text"
                          placeholder="What’s the title of this event?"
                          className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-lg font-onest text-gray-200">
                      Options
                    </label>
                    <div className="w-full h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                      <input
                        type="text"
                        placeholder="Add"
                        className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                      />
                    </div>
                    <hr className="my-[6px] h-[0.5px] border border-gray-700" />
                    <div className="w-full h-[52px] bg-gray-800 border border-gray-700 rounded-[8px] ">
                      <input
                        type="text"
                        placeholder="Add"
                        className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-lg font-onest text-gray-200">
                      Description
                    </label>
                    <div className="w-full h-[120px] bg-gray-800 border border-gray-700 rounded-[8px]">
                      <Textarea
                        type="text"
                        placeholder="What’s happening around you today?"
                        className="font-medium w-full h-full pt-3 outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="w-full h-[52px] bg-gray-700 rounded-[8px] ">
                    <input
                      type="text"
                      placeholder="Make voting free"
                      className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-lg font-onest text-gray-200">
                      Amount per vote
                    </label>
                    <div className="flex items-center gap-2 font-onest">
                      <div className="w-[80%] flex gap-3 h-[52px] bg-gray-800 border border-gray-700 rounded-[8px] px-3">
                        <img className="w-6" src={aco}/>
                        <input
                          type="text"
                          placeholder="|"
                          className="font-medium w-full h-full outline-none bg-transparent  placeholder:text-base placeholder:text-gray-400"
                        />
                      </div>
                      <div className="w-[20%] h-[52px] bg-gray-800 border border-gray-700 rounded-[8px] flex justify-center items-center text-sm text-gray-400">
                        ~US$0.00
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center pt-4 pb-6">
                    <div className=" bg-gray-600 p-2 rounded-full">
                      <img src={image} />
                    </div>
                    <div className=" bg-gray-600 w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                      <p className="font-onest text-base">GIF</p>
                    </div>
                  </div>
                </form>

                <div className="py-6 px-4 bg-gray-800 border-t border-gray-700 rounded-b-[12px]">
                  <button className="thunder_bold bg-gray-600 w-full h-[52px] rounded-[8px] text-xl text-white font-bold">
                    Post
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
