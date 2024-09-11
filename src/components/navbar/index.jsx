import React, { useState } from "react";
import meta from "../../assets/meta.svg";
import ConnectWallet from "../ui/modal/ConnectWallet";
import { Link } from "react-router-dom";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div className="w-full flex justify-between items-center h-[11vh] bg-white-200 border-b border-white-300">
      <div className="flex justify-between px-[3%]  w-full max-w-7xl mx-auto">
        <Link to="/">
          
          <h4 className="thunder_bold text-[#D6594B] text-[32px]">Acolyte</h4>
        </Link>
        <button
          onClick={open}
          className=" px-4 py-0 bg-[#ffffff3d] rounded-[8px] thunder_bold text-white text-xl flex items-center gap-3"
        >
          <img src={meta} alt="meta" />
          Connect Metamask
        </button>
        <ConnectWallet isOpen={isOpen} close={close} />
      </div>
    </div>
  );
};

export default Navbar;
