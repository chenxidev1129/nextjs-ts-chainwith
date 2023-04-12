import Image from "next/image";
import { useRouter } from "next/router";
import BaseLayout from "@/layouts/baseLayout";
import logoImage from "../../assets/images/logo.png";

const Menu = () => {

  const router = useRouter();

  return (
    <BaseLayout title="History">
      <main className="flex flex-col min-h-[100vh] bg-white relative">
        {/* Close Button */}
        <div className="flex justify-center items-center w-12 h-12 absolute top-6 right-[25px] bg-[#ffffffcc] shadow-[0_20px_60px_rgba(55,62,125,0.05)] rounded-full" onClick={() => router.back()}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.10156 6L18.1016 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.10156 18L18.1016 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        {/* Title */}
        <div className="flex flex-row items-center gap-1 px-[18px] pt-[42px]">
          <Image src={logoImage} width={30} height={30} alt="wallet" />
          <p className="text-xl font-bold leading-6 text-black">C2E Wallet</p>
        </div>
        {/* Menu List */}
        <div className="flex flex-col px-[25px] mt-[46px] w-full">
          <div className="flex flex-row items-center justify-between" onClick={() => router.push("/history")}>
            <p className="text-xl font-medium leading-6 text-black">History</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10156 18L15.1016 12L9.10156 6" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <hr className="mt-[41px] border-y-[0.5px] border-[#E3E5EC]"></hr>
          <div className="flex flex-row justify-between items-start mt-[35px]">
            <p className="text-xl font-medium leading-6 text-black">Email</p>
            <div className="flex flex-col gap-[3px] items-end">
              <p className="font-medium text-base leading-[19px] text-[#B4B4B4]">d121aaa@gmail.com</p>
              <p className="font-medium text-base leading-[19px] text-[#B4B4B4]">GOOGLE 가입</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-[30px]">
            <p className="text-xl font-medium leading-6 text-black">Change Password</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10156 18L15.1016 12L9.10156 6" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="flex flex-row justify-between items-center mt-[21px]">
            <p className="text-xl font-medium leading-6 text-black">Logout</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10156 18L15.1016 12L9.10156 6" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <hr className="mt-[59px] border-y-[0.5px] border-[#E3E5EC]"></hr>
          <div className="flex flex-row justify-between items-center mt-[35px]">
            <p className="text-xl font-medium leading-6 text-black">Terms and Conditions of Service</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10156 18L15.1016 12L9.10156 6" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="flex flex-row justify-between items-center mt-[21px]">
            <p className="text-xl font-medium leading-6 text-black">Privacy Policy</p>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.10156 18L15.1016 12L9.10156 6" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p className="font-medium text-sm leading-[17px] text-[#B4B4B4] mt-[163px]">Chain With Inc. All rights reserved</p>
        </div>
      </main>
    </BaseLayout>
  );
}

export default Menu;