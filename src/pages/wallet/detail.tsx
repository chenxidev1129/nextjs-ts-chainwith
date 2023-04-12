import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import MainLayout from "@/layouts/mainLayout";
import mintingImage from "../../assets/images/mintings/minting1.png";

const WalletDetail = () => {

  const router = useRouter();
  const id = router.query.id;
  const [nftItem, setNftItem]: any = useState(null);

  useEffect(() => {
    // Load nft data
    fetch("/api/getNftItem?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setNftItem(data);
      });
  }, []);

  if (nftItem) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center bg-white rounded-t-[25px] py-[12px] px-[25px] h-[calc(100vh-144px)]">
          {/* Back Button */}
          <div className="flex justify-end w-full">
            <div className="flex justify-center items-center w-12 h-12 bg-[#ffffffcc] shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-[25px]" onClick={() => router.push("/wallet")}>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1056 4.8418L3.25977 12M3.25977 12L10.1056 19.1582M3.25977 12H20.9447" stroke="#191C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          {/* Wallet Info */}
          <div className="flex flex-col w-full h-full rounded-[5px] mt-[9px]">
            <Image src={mintingImage} className="w-full h-auto rounded-[5px]" alt="wallet" />
            <div className="flex flex-col w-full py-[26px] px-[15px]">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-[5px]">
                  <p className="font-semibold text-[28px] leading-[33px] text-black">{nftItem.name}</p>
                  <p className="font-bold text-base leading-[19px] text-black">{nftItem.symbol}</p>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <p className="font-semibold text-sm leading-[17px] text-black">Description</p>
                <p className="font-medium text-sm leading-[17px] text-black">{nftItem.description}</p>
              </div>
              <div className="flex flex-col gap-0.5 mt-[14px]">
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-sm leading-[17px] text-black">Contract Address</p>
                  <p className="font-medium text-sm leading-[17px] text-[#4373EB]">{nftItem.address}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-sm leading-[17px] text-black">Token ID</p>
                  <p className="font-medium text-sm leading-[17px] text-[#4373EB]">{nftItem.token_id}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-sm leading-[17px] text-black">Token Standard</p>
                  <p className="font-medium text-sm leading-[17px] text-black">{nftItem.token_standard}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-medium text-sm leading-[17px] text-black">Chain</p>
                  <p className="font-medium text-sm leading-[17px] text-black">{nftItem.chain}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout></MainLayout>
    )
  }
}

export default WalletDetail;