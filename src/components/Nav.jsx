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
            <img
              alt="left-bracket"
              loading="lazy"
              width="4"
              height="17"
              className="w-[4px] h-[17px] r-[2px] border-[1px]"
              src="/images/Rectangle_2710.png"
            ></img>
            <p className="text-[#1a1b1c83] text-opacity-70  font-semibold text-sm ml-1.5 mr-1.5">
              INTRO
            </p>
            <img
              alt="right-bracker"
              loading="lazy"
              width="4"
              height="17"
              className="w-[4px] h-[17px] r-[2px] border-[1px]"
              src="/images/Rectangle_2711.png"
            ></img>
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
