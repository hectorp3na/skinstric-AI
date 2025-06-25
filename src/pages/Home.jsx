import React, { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <main className="antialiased text-[#1A1B1C]">
        <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
          <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            {/* Rotating Boxes */}
            <div className="absolute flex items-center justify-center lg:hidden z-0 -translate-x-1 -translate-y-1/4">
              <div className="relative w-[420px] h-[420px] -translate-x-1 -translate-y-1">
                <div
                  style={{ transform: "translateY(10%) translateX(10%)" }}
                  className="absolute w-[450px] h-[450px] inset-0 border border-dotted border-[#A0A4AB] rotate-45 -translate-x-1 -translate-y-[10%]"
                />
                <div
                  style={{ transform: "translateY(4%) translateX(4%)" }}
                  className="absolute top-1/2 left-1/2 w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            {/* Heading */}
            <div
              id="main-heading"
              className="relative z-10 text-center transition-all duration-500"
            >
              <h1 style={{ transform: isHovered 
                ? "translateY(20%) translateX(100px)"
              : "translateY(20%",
            transition: "transform 0.3s ease",
           }} className="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none">
                Sophisticated
                <br />
                <span className="block text-[#1A1B1C]">skincare</span>
              </h1>
            </div>

            {/* Mobile Paragraph */}
            <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-[#1a1b1c83]">
              Skinstric developed an A.I. that creates a highly-personalized
              routine tailored to what your skin needs.
            </p>

            {/* CTA Button */}
            <div className="z-10 mt-4 lg:hidden">
              <a href="/testing">
                <button className="relative flex items-center gap-4 transition duration-300 hover:scale-105">
                  <span className="text-[12px] font-bold">
                    ENTER EXPERIENCE
                  </span>
                  <div className="w-[24px] h-[24px] border border-black rotate-45" />
                  <span className="absolute left-[129px] scale-[0.5]">
                    <svg
                      viewBox="0 0 24 24"
                      width="50"
                      height="24"
                      className="fill-black"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </a>
            </div>

            {/* Bottom Paragraph */}
            <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
              <p>
                Skinstric developed an A.I. that creates a<br />
                highly-personalized routine tailored to
                <br />
                what your skin needs.
              </p>
            </div>

            {/* CTA Left */}
            <div
              style={{ transform: isHovered 
                ? "translateY(20%) translateX(-100px)"
              : "translateY(20%",
            transition: "transform 0.3s ease",
           }}
              className="hidden lg:block fixed left-[calc(-53vw)] xl:left-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 fixed inset-0" />
                <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                  id="discover-button"
                  className="
    inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md text-sm text-[#1A1B1C]
    transition-transform duration-300
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
    cursor-pointer disabled:opacity-50
    h-9 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/5 xl:translate-x-1/6
    hover:scale-110 hover:text-black
  "
                >
                  <div className="w-[30px] h-[30px] border border-black rotate-45 transition-transform duration-300 hover:scale-125" />
                  <span className="absolute left-[18px] top-[8px] scale-[0.9] rotate-180 transition-transform duration-300 hover:scale-110">
                    ▶
                  </span>
                  <span>DISCOVER A.I.</span>
                </button>
              </div>
            </div>

            {/* CTA Right */}
            <div
            style={{ transform: isHovered 
                ? "translateY(20%) translateX(100px)"
              : "translateY(20%",
            transition: "transform 0.3s ease",
           }}
              className="hidden lg:block fixed right-[calc(-53vw)] xl:right-[calc(-50vw)] top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0" />
                <a href="/testing">
                  <button
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                    id="take-test-button"
                    className="inline-flex items-center gap-4 text-sm text-[#1A1B1C] h-9 absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/5 xl:-translate-x-1/6 px-3 py-1 cursor-pointer group-hover:scale-[0.92] ease duration-300 hover:text-black"
                  >
                    <span>TAKE TEST</span>
                    <div className="w-[30px] h-[30px] border border-black rotate-45 group-hover:scale-[1] ease duration-300" />
                    <span className="absolute left-[107px] top-[9px] scale-[0.9]">
                      ▶
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
