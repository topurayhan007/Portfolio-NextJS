"use client";
import React, { useEffect, useState } from "react";

const HeroSymbol = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const leftTranslation = `translateX(-${scrollY / 1.5}px)`;
  const rightTranslation = `translateX(${scrollY / 1.5}px)`;
  const middleTranslation = `translateY(-${scrollY}px)`;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full overflow-hidden">
      <h1 className="lg:text-[800px] md:text-[600px] sm:text-[500px] xs:text-[450px] text-[380px] font-bold text-transparent select-none text-center flex justify-center items-center">
        <span style={{ transform: leftTranslation }}>{`<`}</span>
        <span style={{ transform: middleTranslation }}>{`/`}</span>
        <span style={{ transform: rightTranslation }}>{`>`}</span>
      </h1>
    </div>
  );
};

export default HeroSymbol;
