import Image from "next/image";
import { useRouter } from "next/router";

const NftItem = ({ key, logo, name, symbol, volume, id }: any) => {

  const router = useRouter();
  
  return (
    <div key={key} className="flex flex-row items-center gap-6 bg-white border border-[#EBEFF1] shadow-[0px_4px_4px_rgba(0,0,0,0.1)] rounded-[15px]" onClick={() => router.push({pathname: "/wallet/detail", query: {id: id}})}>
      <Image className="rounded-[15px]" src={logo} width={90} height={90} alt="token1" />
      <div className="flex flex-col flex-grow">
        <p className="font-semibold text-lg leading-[21px] text-black">{name}</p>
        <p className="font-semibold text-sm leading-[17px] text-black">{symbol}</p>
        <p className="font-medium text-[15px] leading-[18px] text-[#9395A4] mt-[6px]">{volume}</p>
      </div>
    </div>
  );
}

export default NftItem;