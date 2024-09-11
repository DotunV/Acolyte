import React, { useState } from 'react'
import meta from "../../assets/meta.svg"
import ConnectWallet from '../ui/modal/ConnectWallet';
const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);

    function open() {
      setIsOpen(true);
    }

    function close() {
      setIsOpen(false);
    }
  return (
    <div className="w-full flex justify-between items-center h-[12vh] bg-white-200 border-b border-white-300">
      <div className="flex justify-between px-[5%]  w-full max-w-7xl mx-auto">
        <h4 className="thunder_bold text-[#D6594B] text-[32px]">Acolyte</h4>
        <button
          onClick={open}
          className=" px-4 py-3 bg-[#ffffff3d] rounded-[8px] thunder_bold text-white text-xl flex items-center gap-3"
        >
          <img src={meta} alt="meta" />
          Connect Metamask
        </button>
        <ConnectWallet isOpen={isOpen} close={close}/>
      </div>
    </div>
  );
}

export default Navbar;