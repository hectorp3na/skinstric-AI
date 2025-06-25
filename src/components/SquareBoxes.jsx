import React from "react";

const SquareBoxes = () => {
    return (
        <div className="absolute flex items-center justify-center lg:hidden z-0 -translate-x-1 -translate-y-1/4">
              <div className="relative w-[420px] h-[420px] -translate-x-1 -translate-y-1">
                <div
                  style={{ transform: "translateY(5%) translateX(5%)" }}
                  className="absolute w-[450px] h-[450px] inset-0 border border-dotted border-[#A0A4AB] rotate-45 -translate-x-1 -translate-y-[10%]"
                />
                <div
                  style={{ transform: "translateY(8%) translateX(8%)" }}
                  className="absolute top-1/2 left-1/2 w-[350px] h-[350px] border border-dotted border-[#A0A4AB] rotate-45 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
    );
    }

export default SquareBoxes;