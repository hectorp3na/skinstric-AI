import React, { useState } from "react";
import RotatingSquares from "../components/RotatingSquares";
import TestingText from "../components/TestingText";

const Testing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="__className_5f0add antialiased text-[#1A1B1C]">
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>

        <div className="relative flex flex-col items-center justify-center mb-40 w-full h-full">
          <TestingText
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
          />
          <RotatingSquares />
        </div>

        <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
          <a className="pt-btn" aria-label="Back" href="/">
            <div>
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold">
                  BACK
                </span>
              </div>

              <div className="group hidden sm:flex flex-row items-center relative">
                <div className="relative w-12 h-12 border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300">
                  <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                    <span className="rotate-180 scale-[0.9]">▶</span>
                  </div>
                </div>

                <span className="text-sm font-semibold ml-6">BACK</span>
              </div>
            </div>
          </a>

          <div
            className={`flex items-center transition-all duration-700 ease-out transform ${
              isSubmitted && !isLoading
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0 pointer-events-none"
            }`}
          >
            <a className="pt-btn" aria-label="Proceed" href="/result">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                  <span className="rotate-[-45deg] text-xs font-semibold">
                    PROCEED
                  </span>
                </div>

                <div className="group hidden sm:flex flex-row items-center space-x-6 relative">
                  <span className="text-sm font-semibold">PROCEED</span>
                  <div className="relative w-12 h-12 border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300">
                    <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                      <span className="scale-[0.9]">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
