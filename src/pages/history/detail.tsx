import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DetailLayout from "@/layouts/detailLayout";
import tokenImage from "../../assets/images/tokens/token1.png";

const HistoryDetail = () => {

  const router = useRouter();
  const id = router.query.id;
  const [historyItem, setHistoryItem]: any = useState(null);

  useEffect(() => {
    // Load history data
    fetch("/api/getHistoryItem?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setHistoryItem(data);
      });
  }, []);

  if (historyItem) {
    return (
      <DetailLayout title="History">
        <div className="flex flex-col px-2.5 mt-[48px]">
          <div className="flex flex-row gap-3 items-center">
            <div className="w-[11px] h-[11px] bg-[#F7931A] rounded-full"></div>
            <p className="font-medium text-lg leading-[21px] text-[#F7931A]">{historyItem.status}</p>
          </div>
          <div className="flex flex-row gap-2 items-center mt-[17px]">
            <div className="w-8 h-8">
              <Image src={tokenImage} alt="Coin" />
            </div>
            <p className="font-normal text-lg leading-[21px] text-black">{historyItem.symbol}</p>
          </div>
          <div className="flex mt-1.5">
            <p className="font-semibold text-2xl leading-[29px] text-[#0A0A0A]">{historyItem.volume.toLocaleString(3)}</p>
          </div>
          <div className="flex flex-col gap-[7px] mt-[27px]">
            <p className="font-medium text-base leading-[19px] text-black">Time</p>
            <p className="font-medium text-base leading-[19px] text-[#9395A4]">{historyItem.time}</p>
          </div>
          <div className="flex flex-row justify-between mt-[30px]">
            <div className="flex flex-col gap-[7px]">
              <p className="font-medium text-base leading-[19px] text-black">Sender</p>
              <div className="flex flex-row items-center gap-[5px]">
                <p className="font-normal text-base leading-[19px] text-[#9395A4]">0x164...C8e6</p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.98633" y="1.59814" width="6.63972" height="7.40896" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.21199 9.29045V12.5091H1.57227V5.1001H2.94883" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-medium text-base leading-[19px] text-black">Receiver</p>
              <div className="flex flex-row items-center gap-[5px]">
                <p className="font-normal text-base leading-[19px] text-[#9395A4]">0x164...C8e6</p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5.98633" y="1.59814" width="6.63972" height="7.40896" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.21199 9.29045V12.5091H1.57227V5.1001H2.94883" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-[30px]">
            <p className="font-normal text-base leading-[19px] text-black">Fee</p>
            <p className="font-medium text-base leading-[19px] text-[#9395A4]">{historyItem.fee} USDT</p>
          </div>
          <div className="flex flex-col gap-1 mt-[30px]">
            <p className="font-normal text-base leading-[19px] text-black">TXID</p>
            <p className="font-medium text-sm leading-[17px] text-[#4373EB]">{historyItem.tax}</p>
          </div>
        </div>
      </DetailLayout>
    );
  } else {
    <DetailLayout></DetailLayout>
  }
}

export default HistoryDetail;