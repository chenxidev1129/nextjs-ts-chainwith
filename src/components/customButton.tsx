const CustomButton = ({ title, backgroundColor, onClick }: any) => {

  const handleClick = () => {
    if (onClick)
    onClick();
  }
  
  return (
    <div className="flex justify-center items-center w-full h-[55px] shadow-[0_4px_4px_rgba(0,0,0,0.1)] rounded-[25px]" style={{backgroundColor: backgroundColor}} onClick={() => handleClick()}>
      <p className="font-semibold text-lg leading-[27px] text-white">{title}</p>
    </div>
  );
}

export default CustomButton;