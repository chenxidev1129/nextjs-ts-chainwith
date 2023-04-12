import { useState } from "react";

const MenuSwitch = ({ trueTitle, falseTitle, onChnage }: any) => {

  const [menuState, setMenuState] = useState(true);

  const handleChange = () => {
    const originStatus = menuState;
    setMenuState(!originStatus);

    if (onChnage) {
      onChnage({ result: !originStatus });
    }
  };

  return (
    <div className="flex w-full bg-[#EBEFF1] rounded-full p-1" onClick={() => handleChange()}>
      {/* Activated Button */}
      <div className="flex justify-center items-center rounded-full flex-1 py-[14px]" style={{ backgroundColor: menuState ? "#ffffffcc" : "", boxShadow: menuState ? "0px 20px 40px rgba(55, 62, 125, 0.1)" : "" }}>
        <p className="text-sm leading-[21px]" style={{ fontWeight: menuState ? 600 : 500, color: menuState ? "#191C32" : "#9395A5" }}>{trueTitle}</p>
      </div>
      {/* Default Button */}
      <div className="flex justify-center items-center rounded-full flex-1 py-[14px]" style={{ backgroundColor: !menuState ? "#ffffffcc" : "", boxShadow: !menuState ? "0px 20px 40px rgba(55, 62, 125, 0.1)" : "" }}>
        <p className="text-sm leading-[21px]" style={{ fontWeight: !menuState ? 600 : 500, color: !menuState ? "#191C32" : "#9395A5" }}>{falseTitle}</p>
      </div>
    </div>
  );
}

export default MenuSwitch;