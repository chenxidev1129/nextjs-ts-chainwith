import Image from "next/image";
import { useRouter } from "next/router";

const TokenItem = ({ key, logo, name, symbol, volume, id }: any) => {

	const router = useRouter();

	return (
		<div key={key} className="flex flex-row items-center gap-4" onClick={() => router.push({pathname: "/wallet/detail", query: {id: id}})}>
			<Image className="rounded-full" src={logo} width={56} height={56} alt="token1" />
			<div className="flex flex-col gap-[3px] flex-grow">
				<p className="font-medium text-lg leading-[27px] text-[#333333]">{name}</p>
				<p className="font-medium text-sm leading-[21px] text-[#9395A4]">{symbol}</p>
			</div>
			<p className="font-medium text-lg leading-[27px] text-[#333333]">{volume.toLocaleString(3)}</p>
		</div>
	);
}

export default TokenItem;