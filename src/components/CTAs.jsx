import React, { useState } from "react";

const CTAs = () => {
     const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* CTA Left */}
      <div
        style={{
          transform: isHovered
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
        style={{
          transform: isHovered
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
    </>
  );
};

export default CTAs;
