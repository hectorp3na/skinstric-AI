import React from "react";

const BackButton = () => {
    return (
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
          </div>
    );
    }

export default BackButton;