import React from "react";
import RotatingSquares from "../components/RotatingSquares";

const Testing = () => {
  return (
    <div className="__className_5f0add antialiased text-[#1A1B1C]">
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>

        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
            CLICK TO TYPE
          </p>
          <form
            className="relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              throw new Error("React form unexpectedly submitted.");
            }}
          >
            <div className="flex flex-col items-center"></div>
            <input
              className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
              placeholder="Introduce Yourself"
              type="text"
              autoComplete="off"
              autoFocus
              name="name"
            />
            <button type="submit" className="sr-only">
              Submit
            </button>
          </form>

          {/* Diamond Images */}
     <RotatingSquares />
        </div>

        <div className="absolute bottom-[38.5px] md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="inset-0" aria-label="Back" href="/">
            <div>
              <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                  BACK
                </span>
              </div>
              <div className="group hidden sm:flex flex-row relative justify-center items-center">
                <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300" />
                <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">
                  ▶
                </span>
                <span className="text-sm font-semibold hidden sm:block ml-6">
                  BACK
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testing;
