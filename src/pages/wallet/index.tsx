import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layouts/mainLayout";
import MenuSwitch from "@/components/menuSwitch";
import TokenItem from "@/components/tokenItem";
import tokenImage from "../../assets/images/tokens/token1.png";
import nftImage from "../../assets/images/nfts/nft1.png";
import NftItem from "@/components/nftItem";

const Wallet = () => {

  const router = useRouter();

  const [expandStatus, setExpandStatus] = useState<Boolean>(false);
  const [switchStatus, setSwitchStatus] = useState<Boolean>(true);
  const [tokenList, setTokenList]: any = useState([]);
  const [nftList, setNftList]: any = useState([]);

  useEffect(() => {
    // Load token data
    fetch("/api/getTokenList")
      .then((res) => res.json())
      .then((data) => {
        setTokenList(data);
      });

    // Load nft data
    fetch("/api/getNftList")
      .then((res) => res.json())
      .then((data) => {
        setNftList(data);
      });
  }, []);

  const handleExpandPanel = () => {
    setExpandStatus(!expandStatus);
  }

  const handleSwitchMenu = (event: any) => {
    setSwitchStatus(event.result);
  }

  return (
    <MainLayout>
      {/* Summary */}
      <div className="flex px-[25px] pb-[21px]" style={{ display: expandStatus ? "none" : "flex" }}>
        <div className="flex flex-col w-full px-5 py-[15px] bg-[#ffffff66] rounded-[25px] backdrop-blur-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          {/* Hi message */}
          <p className="font-semibold text-sm leading-[17px] text-[#26273C]">000 wallet</p>
          {/* Money */}
          <p className="font-medium text-[28px] leading-[33px text-[#333333]] mt-2.5">32,128 C2E</p>
          {/* Points */}
          <p className="font-medium text-lg leading-[21px] text-[#9395A4]">3,000 point</p>
          {/* Serial Number */}
          <div className="flex flex-row gap-1 mt-4">
            <p className="font-medium text-xs leading-[14px] text-[#9395A4]">0x164...C8e6</p>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigator.clipboard.writeText("0x164...C8e6")}>
              <g clip-path="url(#clip0_37_6225)">
                <rect x="5.9873" y="1.59814" width="6.63972" height="7.40896" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.21394 9.29045V12.5091H1.57422V5.1001H2.95078" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_37_6225">
                  <rect width="14" height="14" fill="white" transform="translate(0.102539)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Button Group */}
          <div className="flex flex-row gap-[15px] justify-between mt-4">
            {/* Transfer Button */}
            <div className="flex justify-start items-center gap-3 flex-1 px-[15px] py-[9px] rounded-[25px] bg-[#ffffffcc]" onClick={() => router.push('/transfer')}>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="14.1025" cy="14.5625" rx="14" ry="14.038" fill="#DEF5E9" />
                <path d="M18.7695 16.285L18.7695 9.26299M11.6535 9.26299L18.7695 9.26299M18.7695 9.26299L8.81787 19.2417" stroke="#5FC88F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-bold text-[13px] leading-4 tracking-[0.13em] text-[#000000]">Transfer</p>
            </div>
            {/* Swap Button */}
            <div className="flex justify-start items-center gap-3 flex-1 px-[15px] py-[9px] rounded-[25px] bg-[#ffffffcc]" onClick={() => router.push('/swap')}>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="14.1025" cy="14.5625" rx="14" ry="14.038" fill="#FFEBE4" />
                <path d="M8.10254 12.6306H19.1025L16.0292 9.54883" stroke="#F7931A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.1025 17.1893H8.10254L11.1759 20.271" stroke="#F7931A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="font-bold text-[13px] leading-4 tracking-[0.13em] text-[#000000]">Swap</p>
            </div>
          </div>
        </div>
      </div>
      {/* Panel */}
      <div className="flex flex-col items-center bg-white rounded-t-[25px] pt-1 px-[15px]" style={{ height: expandStatus ? "calc(100vh - 144px)" : "calc(100vh - 378px)" }}>
        <div className="flex flex-col gap-[3px] w-full px-2.5">
          {/* Scroll Top Button */}
          <div className="flex justify-center w-full py-1" onClick={() => handleExpandPanel()}>
            <svg style={{ display: expandStatus ? "none" : "flex" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1025 15L12.1025 9L6.10254 15" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg style={{ display: expandStatus ? "flex" : "none" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.10254 9L12.1025 15L18.1025 9" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          {/* Switch Button */}
          <MenuSwitch trueTitle="Token" falseTitle="NFT" onChnage={(event: any) => handleSwitchMenu(event)} />
        </div>
        {/* Token List */}
        <div className="grid grid-cols-1 gap-[29px] w-full px-2.5 my-2 py-2.5 overflow-y-auto" style={{ display: switchStatus ? "grid" : "none" }}>
          {
            tokenList.map((tokenItem: any, index: any) => (
              <TokenItem key={index} logo={tokenImage} name={tokenItem.name} symbol={tokenItem.symbol} volume={tokenItem.volume} id={tokenItem.id} />
            ))
          }
        </div>
        {/* NFT List */}
        <div className="grid grid-cols-1 gap-[18px] w-full px-2.5 my-2 py-2.5 overflow-y-auto" style={{ display: !switchStatus ? "grid" : "none" }}>
          {
            nftList.map((nftItem: any, index: any) => (
              <NftItem key={index} logo={nftImage} name={nftItem.name} symbol={nftItem.symbol} volume={nftItem.volume} id={nftItem.id} />
            ))
          }
        </div>
      </div>
    </MainLayout>
  );
}

export default Wallet;