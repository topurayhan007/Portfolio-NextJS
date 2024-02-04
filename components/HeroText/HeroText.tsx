import React from "react";

const HeroText = () => {
  return (
    <div className="absolute sm:top-[calc(50%-40px)] top-[calc(50%-24px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 sm:w-96 xs:w-80 w-[230px]">
      <div
        className="group perspective-text text-white md:text-5xl 
      sm:text-[40px] xs:text-[32px] text-[28px] font-bold"
      >
        <div className="perspective-line sm:h-20 h-12 overflow-hidden relative px-5">
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none"></p>
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            Hi,
          </p>
        </div>
        <div className="perspective-line bg-[#e0017a]  shadow-[#e0017a]/30 md:h-20 sm:h-16 h-12 overflow-hidden relative px-5 transform skew-x-[0deg] skew-y-[-15deg] scale-y-[1.337]">
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            Hi,
          </p>
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            I&apos;m
          </p>
        </div>
        <div className="perspective-line bg-[#270f5a] shadow-xl shadow-[#180a36]/30 md:h-20 sm:h-16 h-12 overflow-hidden relative px-5 sm:top-[13px] top-[7px]">
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            I&apos;m
          </p>
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            Topu Rayhan
          </p>
        </div>
        <div className="perspective-line bg-[#0cf5d5] shadow-xl shadow-[#0cf5d5]/30 md:h-20 sm:h-16 h-12 overflow-hidden relative px-5 transform skew-x-[0deg] skew-y-[-15deg] scale-y-[1.337] sm:top-[25px] top-[14px]">
          <p className="m-0 sm:h-20 sm:leading-[80px] h-10 leading-[40px] transition-all duration-500 ease-in-out sm:group-hover:transform sm:group-hover:translate-x-0 sm:group-hover:-translate-y-20 group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-10 select-none">
            Topu Rayhan
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
