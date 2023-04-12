import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import SubLayout from "@/layouts/subLayout";
import nftImage from "../../assets/images/nfts/nft1.png";
import CoinItem from "@/components/coinItem";

const Transfer = () => {

  const router = useRouter();

  const [tokenList, setTokenList]: any = useState([]);

  useEffect(() => {
    // Load token data
    fetch("/api/getTokenList")
      .then((res) => res.json())
      .then((data) => {
        setTokenList(data);
      });
  }, []);

  return (
    <SubLayout backgroundColor="#FFADB2" title="Coin Transfer">
      <p className="font-medium text-lg leading-[21px] text-black">Please select coins.</p>
      <div className="grid grid-cols-1 divide-y-[0.5px] divide-[#E5E7F3] w-full mt-[53px] px-2.5 pb-10 overflow-y-auto">
        {
          tokenList.map((tokenItem: any, index: any) => (
            <CoinItem key={index} logo={nftImage} name={tokenItem.name} symbol={tokenItem.symbol} volume={tokenItem.volume} id={tokenItem.id} />
          ))
        }
      </div>
    </SubLayout>
  );
}

export default Transfer;