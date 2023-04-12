import { useRouter } from "next/router";
import BaseLayout from "./baseLayout";

const DetailLayout = ({ children, title }: any) => {

  const router = useRouter();

  return (
    <BaseLayout>
      <main className="flex flex-col min-h-[100vh] bg-[#FFB783] px-[15px] pt-[37px]" style={{ backgroundColor: "white" }}>
        <div className="flex flex-row justify-center relative">
          <p className="font-semibold text-xl leading-[30px] text-[#26273C]">{title}</p>
          <div className="absolute -top-[9px] right-2.5 w-12 h-12 flex justify-center items-center bg-[#ffffffcc] shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-full" onClick={() => router.back()}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1056 4.8418L3.25977 12M3.25977 12L10.1056 19.1582M3.25977 12H20.9447" stroke="#191C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        {children}
      </main>
    </BaseLayout>
  );
}

export default DetailLayout;