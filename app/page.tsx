import HeroBg from "@/components/HeroBg/HeroBg";
import HeroGlow from "@/components/HeroGlow/HeroGlow";
import HeroSymbol from "@/components/HeroSymbol/HeroSymbol";
import HeroText from "@/components/HeroText/HeroText";

export default function Home() {
  return (
    <main className="antialiased bg-[#0a0812] -z-50">
      {/* Hero/Banner Section */}
      {/* Header */}
      <section className="relative h-[100vh] w-full ">
        <HeroBg />
        <HeroGlow />
        <div className="">
          <HeroText />
          <HeroSymbol />
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full h-[100vh] lg:px-20 md:px-10 sm:px-5 px-5 lg:py-24 md:py-14 py-8 flex items-center justify-center ">
        <div className="w-[600px] h-[600px]">
          <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-purple-600 to-pink-800 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
          <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-blue-600 to-violet-800 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
          <div className="-rotate-[15deg] rounded-3xl bg-gradient-to-r from-violet-600 to-teal-600 blur-3xl filter h-[33.33%] w-full opacity-20"></div>
        </div>
      </section>
    </main>
  );
}
