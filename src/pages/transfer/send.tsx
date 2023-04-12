import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SubLayout from "@/layouts/subLayout";
import CustomInput from "@/components/customInput";
import nftImage from "../../assets/images/nfts/nft1.png";
import CustomButton from "@/components/customButton";

const SendTransfer = () => {

  const router = useRouter();
  const id = router.query.id;
  const [tokenItem, setTokenItem]: any = useState(null);
  const [amount, setAmount] = useState<Number>(0);

  useEffect(() => {
    // Load token data
    fetch("/api/getTokenItem?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setTokenItem(data);
      });
  }, []);

  const handleMaxClick = () => {
    setAmount(tokenItem.volume);
  }

  return (
    <SubLayout backgroundColor="#FFADB2" title="Coin Transfer">
      {/* Photo */}
      <div className="flex justify-center mt-2.5">
        <Image className="rounded-full" src={nftImage} width={110} height={110} alt="logo"></Image>
      </div>
      {/* Address Input */}
      <div className="flex hidden flex-col gap-1 w-full mt-[30px]">
        <div className="flex items-center w-full h-[60px] px-[22px] bg-[#FAFBFB] border-[0.5px] border-[#BEBEBE] shadow-[0_4px_4px_rgba(25,28,50,0.1)] rounded-[15px]">
          <p className="font-medium text-lg leading-[27px] text-[#CACACA]">Address of receiver</p>
        </div>
      </div>
      {/* Address Invalid Input */}
      <CustomInput type="text" placeholder="Address of receiver" />
      {/* Amount Input */}
      <CustomInput type="number" placeholder="Amount" defaultValue={amount} isAction={true} actionTitle="Max" onClickAction={() => handleMaxClick()} />
      {/* Send Invalid Button */}
      <div className="flex flex-col gap-[18px] w-full mt-[57px]">
        <div className="flex justify-between px-2.5">
          <p className="font-medium text-base leading-6 text-[#F04949]">Network Fee</p>
          <p className="font-medium text-base leading-[19px] text-[#F04949]">1,000 BFC</p>
        </div>
        <CustomButton title="Send" backgroundColor="#BEBEBE" />
      </div>
    </SubLayout >
  );
}

export default SendTransfer;