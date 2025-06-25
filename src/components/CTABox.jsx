import React from "react";

const CTABox = ({
  side = "left",
  label,
  link,
  hoverDirection,
  setHoverDirection,
}) => {
  const isLeft = side === "left";

  return (
    <div
      style={{
        transform:
          hoverDirection === side
            ? `translateY(20%) translateX(${isLeft ? "-100px" : "100px"})`
            : "translateY(20%)",
        transition: "transform 0.3s ease",
      }}
      className={`hidden lg:block fixed ${
        isLeft
          ? "left-[calc(-53vw)] xl:left-[calc(-50vw)]"
          : "right-[calc(-53vw)] xl:right-[calc(-50vw)]"
      } top-1/2 -translate-y-1/2 w-[500px] h-[500px]`}
    >
      <div className="relative w-full h-full">
        <div className="w-full h-full border border-dotted border-[#A0A4AB] rotate-45 absolute inset-0" />
        {link ? (
          <a href={link}>
            <button
              onMouseEnter={() => setHoverDirection(side)}
              onMouseLeave={() => setHoverDirection(null)}
              className={`inline-flex items-center gap-4 text-sm text-[#1A1B1C] h-9 absolute top-1/2 ${
                isLeft
                  ? "right-0 -translate-x-1/5 xl:translate-x-1/6"
                  : "left-0 -translate-x-1/5 xl:-translate-x-1/6"
              } -translate-y-1/2 px-3 py-1 cursor-pointer ease duration-300 hover:text-black`}
            >
              {isLeft && (
                <div className="w-[30px] h-[30px] border border-black rotate-45" />
              )}
              <span>{label}</span>
              {!isLeft && (
                <div className="w-[30px] h-[30px] border border-black rotate-45" />
              )}
              <span
                className={`absolute top-[9px] ${
                  isLeft ? "left-[18px] rotate-180" : "left-[107px]"
                } scale-[0.9]`}
              >
                ▶
              </span>
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default CTABox;