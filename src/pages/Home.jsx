import React from "react";

const Home = () => {
  return (
    <div className="relative max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
      {/* Rotated boxes  */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden z-0">
        <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div id="main-heading" className="text-center">
          <h1 className="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none opacity-100">
            Sophisticated
            <span className="block text-[#1A1B1C]">skincare</span>
          </h1>
        </div>

        {/* Centered paragraph */}
        <p className="block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-[#1a1b1c83]">
          Skinstric developed an A.I. that creates a highly-personalized
          routine tailored to what your skin needs.
        </p>

        {/* "Enter Experience" Button */}
        <div className="mt-4 lg:hidden">
          <a href="/testing">
            <button className="relative flex items-center gap-4 hover:scale-105 duration-300">
              <span className="text-[12px] font-bold cursor-pointer">
                ENTER EXPERIENCE
              </span>
              <div className="w-[24px] h-[24px] border border-solid border-black rotate-45 cursor-pointer"></div>
              <span className="absolute left-[129px] scale-[0.5] hover:scale-60 duration-300">
                <svg
                  viewBox="0 0 24 24"
                  width="40px"
                  height="24px"
                  className="fill-current text-black"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>

      {/* Bottom left paragraph */}
      <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] [@media(width>=1920px)]:left-[calc(-33vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
        <p>
          Skinstric developed an A.I. that creates a highly-personalized routine
          tailored to what your skin needs.
        </p>
      </div>

      {/* Left CTA - DISCOVER A.I. */}
      <div
        id="left-section"
        className="hidden lg:block fixed left-[-160px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] transition-opacity duration-500 ease-in-out opacity-100"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 fixed inset-0"></div>
          <button
            id="discover-button"
            className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus:outline-none h-9 absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 px-3 py-1"
          >
            <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
            <span className="absolute left-[18px] top-[8px] scale-[0.9] rotate-180 group-hover:scale-105 duration-300">
              ▶
            </span>
            <span>DISCOVER A.I.</span>
          </button>
        </div>
      </div>

      {/* Right CTA - TAKE TEST */}
      <div
        id="right-section"
        className="hidden lg:block fixed right-[-160px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] transition-opacity duration-500 ease-in-out opacity-100"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0"></div>
          <a href="/testing">
            <button
              id="take-test-button"
              className="group inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm font-normal text-[#1A1B1C] transition-colors focus:outline-none h-9 absolute top-1/2 left-0 -translate-y-1/2 translate-x-0 px-3 py-1"
            >
              TAKE TEST
              <div className="w-[30px] h-[30px] border border-solid border-black rotate-45 group-hover:scale-110 duration-300"></div>
              <span className="absolute left-[107px] top-[9px] scale-[0.9] cursor-pointer group-hover:scale-105 duration-300">
                ▶
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;