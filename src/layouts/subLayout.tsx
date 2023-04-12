import { useRouter } from "next/router";
import BaseLayout from "./baseLayout";

const SubLayout = ({ children, backgroundColor, title }: any) => {

  const router = useRouter();

  return (
    <BaseLayout>
      <main className="flex flex-col min-h-[100vh] bg-[#FFB783]" style={{ backgroundColor: backgroundColor }}>
        <div className="flex justify-end mt-8 pr-[25px]">
          {/* Back Button */}
          <div className="flex justify-center items-center w-12 h-12 bg-white shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-[25px]" onClick={() => router.back()}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1056 4.8418L3.25977 12M3.25977 12L10.1056 19.1582M3.25977 12H20.9447" stroke="#191C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        {/* Title */}
        <div className="flex px-[25px] mt-[31px]">
          <p className="font-bold text-2xl leading-[29px] text-white">{title}</p>
        </div>
        <div className="flex flex-col items-center bg-[#F7F7FA] rounded-t-[40px] mt-[15px] px-[15px] pt-10 h-[calc(100vh-155px)]">
          {children}
        </div>
      </main>
    </BaseLayout>
  );
}

export default SubLayout;