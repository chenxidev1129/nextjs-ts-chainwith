import Image from "next/image";
import { useRouter } from "next/router";

const CoinItem = ({ key, logo, name, symbol, volume, id }: any) => {

  const router = useRouter();

  return (
    <div key={key} className="flex flex-row items-center gap-[19px] py-[11px]" onClick={() => router.push({pathname: "/transfer/send", query: {id: id}})}>
      <div className="w-[50px] h-[50px] rounded-full bg-[#FFE4C3] border-[1.5px] border-[#E4E5E8]">
        <Image className="rounded-full" src={logo} width={50} height={50} alt="coin" />
      </div>
      <div className="flex flex-col gap-[3px] flex-grow">
        <p className="font-medium text-lg leading-[27px] text-[#26273C]">{name}</p>
        <p className="font-medium text-sm leading-[17px] text-[#9395A4]">{symbol}</p>
      </div>
      <p className="font-medium text-lg leading-[21px] text-[#26273C]">{volume.toLocaleString(3)}</p>
    </div>
  );
}

export default CoinItem;