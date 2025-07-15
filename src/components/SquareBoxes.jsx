import React from "react";

const SquareBoxes = () => {
    return (
       <div className="absolute flex items-center justify-center lg:hidden z-0 -translate-x-1 -translate-y-2">
  <div className="relative w-[420px] h-[420px]">
    {/* Big diamond */}
    <div className="absolute inset-0 w-full h-full border border-dotted border-[#A0A4AB] rotate-45" />

    {/* Small diamond inside */}
    <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] border border-dotted border-[#A0A4AB] rotate-45 -translate-x-1/2 -translate-y-1/2" />
  </div>
</div>
    );
    }

export default SquareBoxes;