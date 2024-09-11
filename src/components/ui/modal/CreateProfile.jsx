


import { Button, Dialog, DialogPanel, Textarea } from "@headlessui/react";
import { useState } from "react";
import user from "../../../assets/user.png";
import Close from "../../../icons/Close";
import user1 from "../../../assets/user1.png"
import meta from "../../../assets/meta.svg"

export default function CreateProfile({ isOpenProfile, closeProfile }) {
  const [createProfile, setCreateProfile] = useState(false);

  return (
    <>
      <Dialog
        open={isOpenProfile}
        as="div"
        className="relative z-[100] focus:outline-none"
        onClose={closeProfile}
      >
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="">
            {createProfile ? (
              <div className="flex md:h-screen h-[871px] md:items-center items-end md:justify-center bg-[#00000052] backdrop-blur-[2px] md:p-4">
                {" "}
                <DialogPanel
                  transition
                  className="relative z-[200] w-full md:max-w-[400px] bg-gray-900 rounded-[12px] duration-300 ease-out"
                >
                  {" "}
                  <div className="py-6 border-b border-gray-700">
                    <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
                      Create Profile
                    </h4>

                    <button
                      onClick={closeProfile}
                      className="absolute right-6 top-7"
                    >
                      <Close />
                    </button>
                  </div>
                  <div className="font-onest flex flex-col justify-center items-center pt-[26px] pb-6 px-6">
                    <div className="w-[116px] h-[116px] rounded-full">
                      <img
                        src={user1}
                        alt="user1"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <h5 className="text-gray-400 font-semibold mt-2.5 font-onest">
                      Noyi24_7@Swst.vercel
                    </h5>
                    <h6 className="text-xl text-gray-200 font-semibold mt-6">
                      Creating Profile...
                    </h6>
                    <p className="text-gray-400 text-center mt-2">
                      This might take a minute. Meanwhile, see how your Swist
                      Profile differs from other socials.
                    </p>
                  </div>
                  <div className="py-6 px-4 bg-gray-800 border-t border-gray-700 rounded-b-[12px]">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={meta} alt="meta"/>
                        <h6 className="text-lg thunder_bold text-white">Conplete Autonomy</h6>
                    </div>
                    <h6 className="font-onest text-sm tracking-[-0.28px] text-gray-500 ">
                      You have full control of your profile and username. No
                      third party, including us, has any authority over you.
                    </h6>
                  </div>
                </DialogPanel>
              </div>
            ) : (
              <div className="flex md:h-auto h-[871px] md:items-center items-end md:justify-center bg-[#00000052] backdrop-blur-[2px] md:p-4">
                <DialogPanel
                  transition
                  className="relative z-[200] w-full md:max-w-[400px] bg-gray-900 rounded-[12px] duration-300 ease-out"
                >
                  <div className="py-6 border-b border-gray-700">
                    <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
                      Create Profile
                    </h4>

                    <button
                      onClick={closeProfile}
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
                        <label className="text-lg font-onest text-gray-200">
                          Username
                        </label>
                        <div className="flex items-center gap-2 font-onest">
                          <div className="w-[60%] h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                            <input
                              type="text"
                              placeholder="johnnnyyy"
                              className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                            />
                          </div>
                          <div className="w-[40%] h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]"></div>
                        </div>
                      </div>
                      <div>
                        <label className="text-lg font-onest text-gray-200">
                          Fullname
                        </label>
                        <div className="w-full h-[52px] bg-gray-800 border border-gray-700 rounded-[8px]">
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="font-medium w-full h-full outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-lg font-onest text-gray-200">
                          Bio
                        </label>
                        <div className="w-full h-[120px] bg-gray-800 border border-gray-700 rounded-[8px]">
                          <Textarea
                            type="text"
                            placeholder="John Doe"
                            className="font-medium w-full h-full pt-3 outline-none bg-transparent px-3 placeholder:text-base placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => setCreateProfile(true)}
                        className="thunder_bold bg-gray-600 w-full h-[52px] rounded-[8px] text-xl text-white/50 font-bold"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                  <div className="py-6 px-4 bg-gray-800 border-t border-gray-700 rounded-b-[12px]">
                    <h6 className="font-onest text-sm tracking-[-0.28px] text-gray-500 text-center">
                      By connecting your wallet, you agree to our Terms of
                      Service and Privacy Policy
                    </h6>
                  </div>
                </DialogPanel>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}
