import React, { useState } from "react";

import mask from "../../assets/mask.png";
import qr from "../../assets/qr.png"
import wallet from "../../assets/wallet.png"
import Navbar from "../../components/navbar";
import ConnectWallet from "../../components/ui/modal/ConnectWallet";
const Auth = () => {
     let [isOpen, setIsOpen] = useState(false);

     function open() {
       setIsOpen(true);
     }

     function close() {
       setIsOpen(false);
     }
  return (
    <div className="">
      <div className="relative  lg:h-screen h-full">
        <img
          src={mask}
          className="absolute left-0 w-full h-full z-20  bg-cover bg-no-repeat"
          alt="mask"
        />
        <div className="absolute left-0 z-[30] w-full  ">
          <Navbar />
        </div>
        <div className="relative z-[20] grid lg:grid-cols-2 grid-cols-1 gap-[40px] h-full pt-[16vh] pb-[4vh] xl:px-[5%] px-[4%] max-w-7xl mx-auto ">
          <div className="col-span-1 bg-white-100 border border-white-300 rounded-[12px] xl:px-[5%] px-[4%] flex flex-col justify-center  backdrop-blur-[2px] xl:h-full xl:pt-0 pt-[64px] xl:pb-0 pb-6">
            <h2 className="md:text-[85px] text-[40px] thunder_bold leading-[96%] text-white">
              Social Interaction <br /> Made Fun
            </h2>
            <div className="flex justify-start mt-4">
              <div className=" py-6 px-4 rounded-[12px] flex items-center md:gap-4 gap-2 bg-white-200 border border-white-300">
                <img src={qr} alt="qrcode" />
                <div className="flex justify-between h-full flex-col">
                  <h5 className="font-onest text-sm text-white font-semibold md:w-[147px] w-full">
                    Scan QR code and Login to Acolyte or...
                  </h5>
                  <button
                    onClick={open}
                    className="cursor-pointer px-4 py-2 bg-white-100 rounded-[8px] thunder_bold text-white text-base flex gap-3 items-center "
                  >
                    <img src={wallet} alt="wallet" />
                    Connect Metamask
                  </button>
                </div>
              </div>
              <ConnectWallet isOpen={isOpen} close={close} />
            </div>
          </div>
          <div className="bg-dark-gradient rounded-[12px] lg:h-full h-[380px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
