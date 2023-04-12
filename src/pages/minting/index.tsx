import { useEffect, useState } from "react";
import MainLayout from "@/layouts/mainLayout";
import MintingItem from "@/components/mintingItem";
import mintingImage from "../../assets/images/mintings/minting1.png";

const Minting = () => {

  const [mintingList, setMintingList]: any = useState([]);

  useEffect(() => {
    // Load minting data
    fetch("/api/getMintingList")
      .then((res) => res.json())
      .then((data) => {
        setMintingList(data);
      });
  }, [])

  return (
    <MainLayout>
      <div className="flex flex-col items-center bg-white rounded-t-[25px] pt-[25px] h-[calc(100vh-144px)]">
        {/* Minting List */}
        <div className="grid grid-cols-1 gap-10 w-full px-[25px] pt-[8px] pb-[33px] overflow-y-auto">
          {
            mintingList.map((mintingItem: any, index: any) => (
              <MintingItem key={index} logo={mintingImage} name={mintingItem.name} symbol={mintingItem.symbol} volume={mintingItem.volume} id={mintingItem.id}/>
            ))
          }
        </div>
      </div>
    </MainLayout>
  );
}

export default Minting;