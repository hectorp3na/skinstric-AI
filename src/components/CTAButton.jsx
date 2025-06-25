import React from "react";

const CTAButton = () => {
    return (
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
  
    );
    }

export default CTAButton;

