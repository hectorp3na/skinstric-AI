import React from "react";

const Summary = () => {
  return (
    <div className="__className_5f0add antialiased text-[#1A1B1C] min-h-screen overflow-auto">
      <div
        className="min-h-[90vh] px-4 max-w-full flex mx-5 flex-col items-center justify-center bg-white text-center"
        style={{
          marginRight: "0px",
          marginBottom: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          marginLeft: "0px",
        }}
      >
        <div
          className="absolute mb-4 top-20 left-9 text-left"
          style={{
            marginBottom: "0px",
            marginRight: "20px",
            paddingRight: "16px",
          }}
        >
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">
              PREDICTED RACE & AGE
            </h4>
          </div>
          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
              <div className="p-3 cursor-pointer  bg-[#1A1B1C] text-white hover:bg-black flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">South asian</p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>
              <div className="p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">30-39</p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>
              <div className="p-3 cursor-pointer  bg-[#F3F3F4] flex-1 flex flex-col justify-between hover:bg-[#E1E1E2] border-t">
                <p className="text-base font-semibold">MALE</p>
                <h4 className="text-base font-semibold mb-1">SEX</h4>
              </div>
            </div>
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                South asian
              </p>
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <div className="width: 100%; height: 100%; max-height: 384px; position: relative; transform: scale(1); transform-origin: center center;">
                  <svg
                    width="384"
                    height="384"
                    viewBox="0 0 384 384"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M192 1.5C217.017 1.5 241.789 6.42743 264.901 16.001C288.014 25.5745 309.014 39.6066 326.704 57.2962C344.393 74.9857 358.426 95.9863 367.999 119.099C377.573 142.211 382.5 166.983 382.5 192C382.5 217.017 377.573 241.789 367.999 264.901C358.426 288.014 344.393 309.014 326.704 326.704C309.014 344.393 288.014 358.426 264.901 367.999C241.789 377.573 217.017 382.5 192 382.5C166.983 382.5 142.211 377.573 119.099 367.999C95.9862 358.425 74.9857 344.393 57.2961 326.704C39.6065 309.014 25.5744 288.014 16.0009 264.901C6.4274 241.789 1.49999 217.017 1.5 192C1.50001 166.983 6.42745 142.211 16.001 119.099C25.5745 95.9862 39.6067 74.9856 57.2962 57.2961C74.9858 39.6065 95.9864 25.5744 119.099 16.0009C142.211 6.4274 166.983 1.49998 192 1.5L192 1.5Z"
                      stroke="#C1C2C3"
                      stroke-width="3"
                    />
                    <path
                      d="M192 1.5C241.488 1.5 289.033 20.7579 324.571 55.197C360.11 89.636 380.852 136.553 382.406 186.016C383.96 235.479 366.205 283.606 332.9 320.209C299.594 356.811 253.352 379.017 203.962 382.124C154.572 385.231 105.911 368.997 68.2801 336.857C30.6494 304.718 7.00261 259.196 2.34544 209.928C-2.31174 160.66 12.3863 111.513 43.3281 72.8912C74.2699 34.2696 119.027 9.20455 168.124 3.00213"
                      stroke="#1A1B1C"
                      stroke-width="3"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl md:text-[40px] font-normal">
                      96
                      <span className="absolute text-xl md:text-3xl">%</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estiamte is wrong, select the correct one.
              </p>
            </div>
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    RACE
                  </h4>
                  <h4 className="text-base leading-[24px] tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer bg-[#1A1B1C] text-white hover:bg-black">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      South asian
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    96%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Southeast asian
                    </span>{" "}
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    6%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className="mr-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      Latino hispanic
                    </span>{" "}
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>
                    <span className="font-normal text-base leading-6 tracking-tight">
                      White
                    </span>{" "}
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    2%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>

                    <span className="font-normal text-base leading-6 tracking-tight">
                      East asian
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>

                    <span className="font-normal text-base leading-6 tracking-tight">
                      Black
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>
                <div className="flex items-center justify-between h-[48px] hover:bg-[#E1E1E2] px-4 cursor-pointer ">
                  <div className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.293 6L6 11.293L0.707031 6L6 0.707031L11.293 6Z"
                        stroke="#1A1B1C"
                      />
                    </svg>

                    <span className="font-normal text-base leading-6 tracking-tight">
                      Middle eastern
                    </span>
                  </div>
                  <span className="font-normal text-base leading-6 tracking-tight">
                    0%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[38.5px] md:bottom-8 w-95 flex justify-between md:px-9 px-13 z-50">
          <a className="pt-btn9" aria-label="Back" href="/result">
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

          <a className="pt-btn9" aria-label="Proceed" href="/">
            <div>
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                <span className="rotate-[-45deg] text-xs font-semibold">
                  HOME
                </span>
              </div>

              <div className="group hidden sm:flex flex-row items-center relative">
                <span className="text-sm font-semibold mr-5">HOME</span>
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
  );
};

export default Summary;
