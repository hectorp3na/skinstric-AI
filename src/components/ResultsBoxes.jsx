import React, { useState } from "react";
import UploadIcon from "./UploadIcon";
import PreppingAnalysis from "./PreppingAnalysis";

const ResultsBoxes = () => {
    const [isFileSelected, setIsFileSelected] = useState(false);

  return isFileSelected ? (
    <PreppingAnalysis />
  ) : (
    <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
      <div className="relative md:absolute md:left-[55%] lg:left-[50%] xl:left-[40%] md:-translate-y-[0%] -translate-y-[1%] md:-translate-x-full flex flex-col items-center justify-center">
        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>

        <svg
          className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[200deg]"
          width="482"
          height="482"
          viewBox="0 0 482 482"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M242 1L483 242L242 483L1 242L242 1Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <svg
          className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-[190deg]"
          width="444.34"
          height="444.34"
          viewBox="0 0 444.34 444.34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M224 1.82812L446.172 224L224 446.172L1.82812 224L224 1.82812Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <svg
          className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
          width="405.18"
          height="405.18"
          viewBox="0 0 405.18 405.18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204 1.40918L406.59 204L204 406.59L1.40918 204L204 1.40918Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <svg
            width="118"
            height="118"
            viewBox="0 0 118 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-[100px] h-[100px] md:w-[136px] md:h-[136px] hover:scale-108 duration-700 ease-in-out cursor-pointer"
          >
            <circle cx="59" cy="59" r="57.7857" stroke="#1A1B1C" />
            <g transform="translate(8, 8)">
              <circle cx="51" cy="51" r="51" fill="#1A1B1C" />
              <path
                d="M83.6683 18.412C75.3149 10.0382 63.7627 4.85693 51.0003 4.85693C48.0469 4.85693 45.1583 5.1344 42.3592 5.66469C47.1338 13.5633 64.5795 41.2549 67.9406 46.1803C68.5932 47.1371 69.753 45.2365 76.7783 31.6929L83.6683 18.412Z"
                fill="#FCFCFC"
              />
              <path
                d="M8.08822 34.004C13.5815 20.1459 25.5936 9.58156 40.3413 6.09418C42.0872 8.71298 45.4221 13.8872 49.0668 19.6493L58.3267 34.2908H31.8858C19.1263 34.2908 11.6691 34.2077 8.08822 34.004Z"
                fill="#FCFCFC"
              />
              <path
                d="M14.8694 79.7032C8.60204 71.8246 4.85742 61.8495 4.85742 50.9998C4.85742 45.801 5.71718 40.803 7.30228 36.1402H22.1666C39.552 36.1402 39.9478 36.1674 39.3267 37.3294C38.0953 39.6338 19.8239 71.2621 14.8694 79.7032Z"
                fill="#FCFCFC"
              />
              <path
                d="M59.9643 96.2725C57.0646 96.8434 54.0674 97.1427 51.0003 97.1427C37.1917 97.1427 24.7998 91.0771 16.3436 81.465C18.1707 77.4055 22.9295 68.9319 31.1717 55.0115C31.9468 53.7014 32.7323 52.781 32.917 52.966C33.1016 53.1503 39.6037 63.5196 47.3671 76.0077L59.9643 96.2725Z"
                fill="#FCFCFC"
              />
              <path
                d="M94.5291 66.348C89.3723 80.9733 77.0533 92.2199 61.7841 95.8757C57.5785 89.3895 43.6125 66.9565 43.6125 66.6094C43.6125 66.4658 55.6814 66.348 70.4326 66.348H94.5291Z"
                fill="#FCFCFC"
              />
              <path
                d="M84.9016 19.6966C92.5003 27.922 97.1431 38.9187 97.1431 50.9998C97.1431 55.923 96.3721 60.6662 94.9442 65.115H79.5965C69.6243 65.115 61.4651 64.9646 61.4651 64.7803C61.4651 64.3997 81.4368 26.0157 84.9016 19.6966Z"
                fill="#FCFCFC"
              />
            </g>
          </svg>
          <div className="absolute bottom-[1%] right-[90px] md:top-[30.9%] md:right-[-12px] translate-y-[-20px]">
            <p className="text-xs md:text-sm font-normal mt-1 leading-[24px] text-left">
              ALLOW A.I.
              <br />
              TO SCAN YOUR FACE
            </p>

            <svg
            className="absolute hidden md:block md:right-[143px] md:top-[20px]"
              width="75"
              height="47"
              viewBox="0 0 70 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 59L63 4" stroke="#1A1B1C" />
              <circle cx="64.5" cy="2.5" r="2" stroke="#1A1B1C" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative md:absolute md:left-[45%] lg:left-[50%] xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:-translate-y-[0%] -translate-y-[10%] transition-opacity duration-300 opacity-100">
        <div className="w-[270px] h-[270px] md:w-[482px] md:h-[482px]"></div>
        <svg
          className="absolute w-[270px] h-[270px] md:w-[482px] md:h-[482px] animate-spin-slow rotate-[205deg]"
          width="482"
          height="482"
          viewBox="0 0 482 482"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M242 1L483 242L242 483L1 242L242 1Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <svg
          className="absolute w-[230px] h-[230px] md:w-[444.34px] md:h-[444.34px] animate-spin-slower rotate-[195deg]"
          width="444.34"
          height="444.34"
          viewBox="0 0 444.34 444.34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            d="M224 1.82812L446.172 224L224 446.172L1.82812 224L224 1.82812Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <svg
          className="absolute w-[190px] h-[190px] md:w-[405.18px] md:h-[405.18px] animate-spin-slowest"
          width="405.18"
          height="405.18"
          viewBox="0 0 405.18 405.18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204 1.40918L406.59 204L204 406.59L1.40918 204L204 1.40918Z"
            stroke="#A0A4AB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0.1 8"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <UploadIcon onFileSelect={() => setIsFileSelected(true)} /> 
          <div className="absolute top-[75%] md:top-[70%] md:left-[17px] translate-y-[-10px]">
            <p className="text-[12px] md:text-[14px] font-normal mt-2 leading-[24px] text-right">
              ALLOW A.I.
              <br />
              ACCESS GALLERY
            </p>
            <svg
            className="absolute hidden md:block md:left-[120px] md:bottom-[39px]"
              width="71"
              height="51"
              viewBox="0 0 66 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.66917 56.874C1.66917 56.0456 2.34074 55.374 3.16917 55.374C3.9976 55.374 4.66917 56.0456 4.66917 56.874C4.66917 57.7025 3.9976 58.374 3.16917 58.374C2.34074 58.374 1.66917 57.7025 1.66917 56.874ZM0.669174 56.874C0.669174 55.4933 1.78846 54.374 3.16917 54.374C3.68565 54.374 4.16555 54.5306 4.56396 54.799L66.3374 -1.52588e-05L67.001 0.748062L5.26634 55.5127C5.52114 55.9044 5.66917 56.3719 5.66917 56.874C5.66917 58.2547 4.54988 59.374 3.16917 59.374C1.78846 59.374 0.669174 58.2547 0.669174 56.874Z"
                fill="#1A1B1C"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsBoxes;
