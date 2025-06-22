import React from "react";

const Nav = () => {
  return (
    <div>
      <header>
        <title>Skinstric</title>
        <meta name="description" content="Your AI Skin Analysis" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </header>
      <div className="__className_5f0add antialiased text-[#1A1B1C] ">
        <div className="flex flex-row h-[64px] w-full justify-between py-3 mb-3 relative z-[1000]">
          <div className="flex flex-row pt-1 scale-75 justify-center items-center">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-semibold text-sm mr-2 line-clamp-4 leading-[16px] text-[#1A1B1C] z-1000"
              href="/"
            >
              SKINSTRIC
            </a>
            <svg
              width="2"
              height="19"
              viewBox="0 0 2 19"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1A1B1C] opacity-70"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="19"
                stroke="currentColor"
                color="#1a1b1c83"
                strokeWidth="1"
              />
            </svg>

            <p className="text-[#1a1b1c83] text-opacity-70  font-semibold text-sm ml-1.5 mr-1.5">
              INTRO
            </p>
            <svg
              width="2"
              height="19"
              viewBox="0 0 2 19"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1A1B1C] opacity-70"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="19"
                stroke="currentColor"
                color="#1a1b1c83"
                strokeWidth="1"
              />
            </svg>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold  transition-colors  disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[10px] bg-[#1A1B1C] leading-[16px]">
            ENTER CODE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
