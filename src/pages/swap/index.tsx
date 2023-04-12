import Image from "next/image";
import { useState } from "react";
import SubLayout from "@/layouts/subLayout";
import CustomButton from "@/components/customButton";
import nftImage1 from "../../assets/images/nfts/nft1.png";

const Swap = () => {

  const [swapStats, setSwapState] = useState<Number>(0);

  const handleSpamCheckClick = () => {
    setSwapState(1);
  }

  const handleSwapClick = () => {
    setSwapState(2);
  }

  const handleProcessClick = () => {
    setSwapState(0);
  }

  const fromCoin = {
    title: "Point",
    symbol: "IBC",
    volume: 12000
  };

  const toCoin = {
    title: "Community",
    symbol: "C2E",
    volume: 32128
  };

  return (
    <SubLayout backgroundColor="#FFB783" title="Swap">
      {/* From Symbol Section */}
      <div className="flex flex-row w-full items-center gap-[15px]">
        <div className="w-[50px] h-[50px] rounded-full bg-[#FFE4C3] border-[1.5px] border-[#E4E5E8]">
          <Image className="rounded-full" src={nftImage1} width={50} height={50} alt="coin" />
        </div>
        <div className="flex flex-col gap-[3px] flex-grow">
          <p className="font-medium text-lg leading-[27px] text-[#26273C]">{fromCoin.symbol}</p>
          <p className="font-medium text-sm leading-[21px] text-[#9395A4]">{fromCoin.title}</p>
        </div>
        <p className="font-medium text-lg leading-[21px] text-[#26273C]">{fromCoin.volume.toString(3)}</p>
        <div className="flex justify-center items-center px-[11px] py-[7px] bg-[#42CBB4] shadow-[0_20px_30px_rgba(25,28,50,0.1)] rounded-[15px] w-[50px]">
          <p className="font-semibold text-sm leading-[21px] text-white">Max</p>
        </div>
      </div>
      {/* Dividing Line */}
      <div className="flex justify-center w-full mt-[26px] relative">
        <hr className="absolute top-[27px] left-0 -mx-[25px] border-t-[0.5px] border-[#E5E7F3] w-[100vw]"></hr>
        <div className="flex justify-center items-center w-[54px] h-[54px] bg-white rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10">
          <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9005 30.2021C12.5643 30.866 13.6407 30.866 14.3046 30.2021L25.1234 19.3833C25.7872 18.7195 25.7872 17.6431 25.1234 16.9792C24.4595 16.3153 23.3831 16.3153 22.7192 16.9792L13.1025 26.5958L3.48589 16.9792C2.82199 16.3153 1.74561 16.3153 1.08172 16.9792C0.417832 17.6431 0.417832 18.7195 1.08172 19.3833L11.9005 30.2021ZM11.4025 -6.40598e-08L11.4025 29L14.8025 29L14.8025 6.40598e-08L11.4025 -6.40598e-08Z" fill="black" />
          </svg>
        </div>
      </div>
      {/* To Symbol Section */}
      <div className="flex flex-row w-full items-center gap-[15px] mt-3">
        <div className="w-[50px] h-[50px] rounded-full bg-[#FFE4C3] border-[1.5px] border-[#E4E5E8]">
          <Image className="rounded-full" src={nftImage1} width={50} height={50} alt="coin" />
        </div>
        <div className="flex flex-col gap-[3px] flex-grow">
          <p className="font-medium text-lg leading-[27px] text-[#26273C]">{fromCoin.symbol}</p>
          <p className="font-medium text-sm leading-[21px] text-[#9395A4]">{fromCoin.title}</p>
        </div>
        <p className="font-medium text-lg leading-[21px] text-[#26273C]">{fromCoin.volume.toString(3)}</p>
        <div className="w-[50px]">
        </div>
      </div>
      {/* Network Fee */}
      <div className="flex flex-row justify-around items-center w-full mt-[30px]" style={{display: swapStats == 0 ? "none" : "flex"}}>
        <p className="font-medium text-[15px] leading-[18px] text-[#5A5A5A]">Network Fee</p>
        <p className="font-medium text-[15px] leading-[18px] text-[#5A5A5A]">1,000 BFC</p>
      </div>
      <div className="flex flex-col gap-[22px] w-full mt-[22px]">
        {/* Checking Button */}
        <div className="w-full" style={{display: swapStats == 0 ? "flex" : "none"}}>
          <CustomButton title="Spam Cheking" backgroundColor="#BEBEBE" onClick={() => handleSpamCheckClick()} />
        </div>
        {/* Swap Button */}
        <div className="w-full" style={{display: swapStats == 1 ? "flex" : "none"}}>
          <CustomButton title="Swap" backgroundColor="#42CBB4" onClick={() => handleSwapClick()} />
        </div>
        {/* Processing Button */}
        <div className="w-full" style={{display: swapStats == 2 ? "flex" : "none"}}>
          <CustomButton title="Process..." backgroundColor="#BEBEBE" onClick={() => handleProcessClick()} />
        </div>
      </div>
    </SubLayout>
  );
}

export default Swap;