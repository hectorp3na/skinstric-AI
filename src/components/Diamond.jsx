import React from "react";

const Diamond = () => {
  return (
    <div
    className="absolute transition-all duration-400 opacity-0"
    style={{
      border: "1px solid #000",
      width: "313.666px",
      height: "313.671px",
      top: "258px",
      left: "738.2px",
      transform: "rotate(-45deg)",
    }}
  >
    <button className="w-[153.88px] h-[153.88px] bg-gray-200 hover:bg-gray-300 transform rotate-45 flex items-center justify-center -m-5 cursor-pointer font-semibold leading-[24px] tracking-tight uppercase hover:scale-[1.05] transition-transform duration-300">
        <span className="transform -rotate-45">
            Demographics
        </span>
    </button>
    </div>
  
  );
};

export default Diamond;
