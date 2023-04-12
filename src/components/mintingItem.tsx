import Image from "next/image";
import { useRouter } from "next/router";

const MintingItem = ({ key, logo, name, symbol, volume, id }: any) => {

  const router = useRouter();

  return (
    <div key={key} className="flex w-full shadow-lg rounded-[10px] relative" onClick={() => router.push({pathname: "/minting/detail", query: {id: id}})}>
      <Image src={logo} className="w-full" alt="minting" />
      <div className="absolute bottom-0 left-0 flex flex-row justify-between items-center w-full bg-white rounded-b-[10px] py-5 px-[15px]">
        <div className="flex flex-col gap-0.5">
          <p className="font-bold text-2xl leading-[29px] text-black">{name}</p>
          <p className="font-bold text-base leading-[19px] text-black">{symbol}</p>
        </div>
        {/* Action Button */}
        <div className="flex justify-center items-center px-[17px] py-[19px] bg-[#42CBB4] rounded-[15px] shadow-[0_5px_20px_rgba(25,28,50,0.1)]">
          <p className="font-semibold text-lg leading-[27px] text-white">{volume} C2E</p>
        </div>
      </div>
    </div>
  );
}

export default MintingItem;