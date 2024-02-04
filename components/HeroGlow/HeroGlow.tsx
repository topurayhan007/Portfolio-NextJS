import React from "react";

const HeroGlow = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[100vh] z-20">
      <div className="lg:w-[700px] lg:h-[700px] md:w-[550px] md:h-[550px] sm:w-[500px] sm:h-[500px] xs:w-[370px] xs:h-[370px] w-[270px] h-[270px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden blur-3xl">
        <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-purple-600 to-pink-800 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
        <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-blue-600 to-violet-800 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
        <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-violet-600 to-teal-600 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
      </div>
    </div>
  );
};

export default HeroGlow;
