import React, { useState } from "react";
import meta from "../../assets/meta.svg";
import ConnectWallet from "../ui/modal/ConnectWallet";
import Web3 from 'web3';
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  
  const [walletAddress, setWalletAddress] = useState("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const navigate = useNavigate();


  let web3 = new Web3(window.ethereum);
  async function requestAccount() {
    console.log("Requesting account...");
    if (window.ethereum) {
      try {
        console.log("metamask detected");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // console.log("metamsk accounts",accounts);
        setWalletAddress(accounts[0]);

        // Save the wallet address in local storage
        localStorage.setItem('walletAddress', accounts[0]);

        // Redirect to profile page if wallet is connected
        if (accounts.length > 0) {
          router.push("/profile");
        } else {
          console.log("No accounts found.");
        }

      } catch (err) {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      }

    } else {
      console.log("metamask not detected");
      alert("Please install metamask and connect to a network");
    }
  }


  return (
    <div className="w-full flex justify-between items-center h-[11vh] bg-white-200 border-b border-white-300">
      <div className="flex justify-between px-[3%]  w-full max-w-7xl mx-auto">
        <Link to="/">

          <h4 className="thunder_bold text-[#D6594B] text-[32px]">Acolyte</h4>
        </Link>
        <button
          onClick={requestAccount}
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
