import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-white text-[#1A1B1C]">
      {/* Mobile Boxes (only below md) */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden z-0 scale-[0.75] origin-center p-6">
        <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Hero Text Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-center">
        <h1 className="text-[60px] lg:text-[100px] font-normal tracking-tight leading-none font-inter">
          Sophisticated
          <span className="block">skincare</span>
        </h1>
        <p className="block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-[#1a1b1c83]">
          Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
        </p>
        <div className="mt-6 lg:hidden">
          <a href="/testing">
            <button className="relative flex items-center gap-4 hover:scale-105 transition-transform">
              <span className="text-[12px] font-bold">ENTER EXPERIENCE</span>
              <div className="w-[24px] h-[24px] border border-black rotate-45"></div>
              <span className="absolute left-[129px] scale-[0.5]">
                <svg viewBox="0 0 24 24" width="40px" height="24px" className="fill-black">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Bottom Left Paragraph (Only on lg+) */}
      <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width>=1920px)]:left-[calc(-33vw)] font-normal text-sm uppercase">
        <p>
          Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs.
        </p>
      </div>

      {/* Left CTA - Discover A.I. */}
      <div className="hidden lg:block fixed left-[-160px] top-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
          <button className="group inline-flex items-center gap-4 text-sm text-[#1A1B1C] h-9 absolute top-1/2 right-0 -translate-y-1/2 px-3 py-1">
            <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 transition-transform"></div>
            <span className="absolute left-[18px] top-[8px] scale-90 rotate-180 group-hover:scale-105 transition-transform">▶</span>
            <span>DISCOVER A.I.</span>
          </button>
        </div>
      </div>

      {/* Right CTA - Take Test */}
      <div className="hidden lg:block fixed right-[-160px] top-1/2 -translate-y-1/2 w-[300px] h-[300px]">
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
          <a href="/testing">
            <button className="group inline-flex items-center gap-4 text-sm text-[#1A1B1C] h-9 absolute top-1/2 left-0 -translate-y-1/2 px-3 py-1">
              <span>TAKE TEST</span>
              <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-110 transition-transform"></div>
              <span className="absolute left-[107px] top-[9px] scale-90 group-hover:scale-105 transition-transform">▶</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;