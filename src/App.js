import Close from "./icons/Close";
import "./App.css";
import Routess from "./routes";
import metamask from "./assets/metamask.svg";

function App() {
  return (
    <div className="bg-light-gradient">
      <Routess />
      <div className="flex justify-center items-center">
        <div className="relative w-[400px]  bg-gray-900 rounded-[12px] ">
          <div className="py-6 border-b border-gray-700">
            <h4 className="text-gray-200 text-center thunder_bold text-[24px]">
              Connect Wallet
            </h4>

            <div className="absolute right-6 top-7">
              <Close />
            </div>
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
          </div>
          <div className="py-6 px-4 bg-gray-800 border-t border-gray-700">
            <h6 className="font-onest text-sm tracking-[-0.28px] text-gray-500 text-center">
              By connecting your wallet, you agree to our Terms of Service and
              Privacy Policy
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
