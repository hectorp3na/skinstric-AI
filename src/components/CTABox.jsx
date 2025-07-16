import React from "react";

const CTABox = ({
  side = "left",
  label,
  link,
  hoverDirection,
  setHoverDirection,
}) => {
  const isLeft = side === "left";
  const isHovered = hoverDirection === side;
  const isOppositeHovered = hoverDirection && hoverDirection !== side;

 const transform = isOppositeHovered
  ? `translateY(-50%) translateY(20%) translateX(${isLeft ? "-100px" : "100px"})`
  : "translateY(-50%) translateY(20%)";

  const opacity = isOppositeHovered ? 0 : 1;

  return (
    <div
      style={{
        transform,
        opacity,
        pointerEvents: isOppositeHovered ? "none" : "auto",
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
      className={`hidden lg:block fixed top-1/2 w-[500px] h-[500px] z-50
        ${isLeft ? "left-[-250px]" : "right-[-250px]"}`}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 border border-[#A0A4AB] rotate-45 pointer-events-none" />

        {link && (
          <a href={link}>
            <button
              onMouseEnter={() => setHoverDirection(side)}
              onMouseLeave={() => setHoverDirection(null)}
              className={`absolute top-1/2 -translate-y-1/2 text-sm uppercase tracking-tight text-[#1A1B1C] font-medium flex items-center gap-3 group
                ${isLeft ? "right-[45px]" : "left-[45px]"}`}
            >
              {isLeft && (
                <div className="w-[30px] h-[30px] border border-black rotate-45 transition-transform duration-300 group-hover:scale-110" />
              )}

              <span>{label}</span>

              {!isLeft && (
                <div className="w-[30px] h-[30px] border border-black rotate-45 transition-transform duration-300 group-hover:scale-110" />
              )}

              <span
                className={`absolute top-1/2 transform -translate-y-2 -translate-x-1 text-[12px] ${
                  isLeft
                    ? "left-[12px] rotate-180"
                    : "right-[5px]"
                }`}
              >
                ▶
              </span>
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CTABox;
