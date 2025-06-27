import React from "react";

const MainText = ({
  title = "Sophisticated",
  subtitle = "skincare",
  mobileDescription,
  desktopDescription,
  hoverDirection,
}) => {

  let transform;
  if (hoverDirection === "left") {
    transform = "translateY(0%) translateX(100px)";
  } else if (hoverDirection === "right") {
    transform = "translateY(0%) translateX(-100px)";
  } else {
    transform = "translateY(0%) translateX(0)";
  }

  return (
    <>
      {/* Heading */}
      <div
        id="main-heading"
        className="relative z-10 text-center transition-all duration-500"
      >
        <h1
          style={{ transform, transition: "transform 0.3s ease" }}
          className="text-[60px] text-[#1A1B1C] lg:text-[100px] font-inter font-normal tracking-tighter leading-none"
        >
          {title}
          <br />
          <span className="block text-[#1A1B1C]">{subtitle}</span>
        </h1>
      </div>

      {/* Mobile Paragraph */}
      {mobileDescription && (
        <p className="z-10 block lg:hidden w-[30ch] mt-4 text-[16px] font-semibold text-center text-[#1a1b1c83]">
          {mobileDescription}
        </p>
      )}

      {/* Desktop Paragraph */}
      {desktopDescription && (
        <div className="hidden lg:block fixed bottom-[calc(-7vh)] left-[calc(-20vw)] xl:left-[calc(-27vw)] 2xl:left-[calc(-31vw)] font-normal text-sm text-[#1A1B1C] space-y-3 uppercase">
          <p>{desktopDescription}</p>
        </div>
      )}
    </>
  );
};

export default MainText;
