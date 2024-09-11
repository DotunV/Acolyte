import React from "react";
import mask from "../../assets/mask.png";
import Navbar from "../../components/navbar";
import price from "../../assets/price.svg";
import plus from "../../assets/plus.svg";
import { CiSearch } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { FaHeart, FaUsers } from "react-icons/fa";
import user from "../../assets/user.png";
import verification from "../../assets/verification.png";
import heart from "../../assets/heart.svg"
import cooment from "../../assets/comment.svg";
import share from "../../assets/share.svg";
import aco from "../../assets/aco.svg";
import more from "../../assets/more.svg";
export default function Home() {
  return (
    <div className="thunder_bold">
      <div className="relative  lg:h-full h-full">
        <img
          src={mask}
          className="absolute left-0 w-full h-full z-20  bg-cover bg-no-repeat"
          alt="mask"
        />
        <div className="absolute left-0 z-[300] w-full  ">
          <Navbar />
        </div>
        <div className="relative z-[50] grid grid-cols-4  gap-[40px]  pt-[15vh] pb-[2vh] h-screen max-w-7xl mx-auto px-[3%]">
          <div className="col-span-1 bg-gray-800 rounded-[12px]  px-6 pt-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col gap-4 pb-4 border-b border-gray-700">
                <div className="p-3 bg-gray-900 rounded-[8px]">
                  <div className=" flex items-center gap-3">
                    <img src={price} alt="price" />
                    <h5 className="text-xl font-bold text-gray-200">200</h5>
                  </div>
                  <p className="text-xs text-gray-400 font-onest mt-2">
                    ~US$1000.00
                  </p>
                </div>
                <h4 className="text-[26px] leading-[28px] text-gray-200 ">
                  What’s happening around you today?
                </h4>
                <button className="thunder_bold bg-gray-600 w-full h-[50px] rounded-[8px] text-xl text-white font-bold flex justify-center items-center gap-2 ">
                  Create a post
                  <img src={plus} alt="plus" />
                </button>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex gap-3 items-start">
                  <MdHomeFilled className="text-[25px] text-[#D6594B] -mt-[2px]" />
                  <h5 className="text-xl text-[#D6594B] ">Home</h5>
                </div>
                <div className="flex gap-3 items-start">
                  <CiSearch className="text-[25px] text-white  -mt-[2px]" />
                  <h5 className="text-xl text-white ">Search</h5>
                </div>
                <div className="flex gap-3 items-start">
                  <FaUsers className="text-[25px] text-white -mt-[2px]" />
                  <h5 className="text-xl text-white ">Following</h5>
                </div>
              </div>
            </div>
            <div className="py-6 px-4">
              <div className="flex justify-center items-center">
                <h5 className="text-xl text-white">Logout</h5>
              </div>
              <p className="text-sm text-gray-400 text-center">
                By connecting your wallet, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="col-span-2 overflow-y-scroll no-scrollbar pb-[] cursor-pointer">
            <div className="flex flex-col gap-2">
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-gray-800 rounded-[16px]">
                <div className="flex gap-2">
                  <div className="w-[56px] h-[56px] rounded-full">
                    <img src={user} className="w-full h-full rounded-full" />
                  </div>
                  <div className="flex flex-col  font-onest">
                    <div className="p-2 flex items-center gap-2">
                      <h5 className="text-xs text-white">Kash</h5>
                      <img src={verification} />
                    </div>
                    <p className="text-gray-400 text-xs">20min ago</p>
                  </div>
                </div>
                <p className="text-base font-onest text-white mt-[18px]">
                  Hey all! We’ve designed an amazing Web3 social media platform
                  built on swisstronik’s layer 2 platform
                </p>
                <div className="font-onest text-[#D6594B] mt-6">
                  @noyi @noyi @noyi @noyi @noyi @noyi @noyi
                </div>
                <div className="flex justify-between items-center font-onest mt-4">
                  <div className="flex gap-2 items-center text-gray-200 ">
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={heart} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={cooment} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={aco} />
                      <h5 className="text-xs">3</h5>
                    </div>
                    <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                      <img src={share} />
                      <h5 className="text-xs">3</h5>
                    </div>
                  </div>
                  <div className="px-1.5 h-[24px] bg-gray-600 rounded-full flex gap-1 items-center justify-center">
                    <img src={more} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1  bg-gray-800 rounded-[12px] p-6">
            <div className="flex flex-col gap-5 text-xl text-white">
              <h5 className="text-[#D6594B]">For You</h5>
              <h5>Trending</h5>
              <h5>Friends</h5>
              <h5 className="text-gray-600">Filter</h5>
              <h5 className="text-[#D6594B]">All</h5>
              <h5>Posts</h5>
              <h5>Swiss Events</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
