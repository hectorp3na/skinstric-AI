import React, { useState } from "react";
import SquareBoxes from "../components/SquareBoxes";
import MainText from "../components/MainText";
import CTAButton from "../components/CTAButton";
import CTAs from "../components/CTAs";

const Home = () => {
  const [hoverDirection, setHoverDirection] = useState(null);

  return (
    <main className="antialiased text-[#1A1B1C] relative min-h-screen">
      {/* CTA side buttons (large) - fixed left/right */}
      <CTAs
        hoverDirection={hoverDirection}
        setHoverDirection={setHoverDirection}
      />

      {/* Centered content */}
      <div className="max-sm:scale-[0.75] max-sm:origin-center max-sm:p-6">
        <div className="flex flex-col items-center justify-center h-[71dvh] md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <SquareBoxes />
          <MainText
            hoverDirection={hoverDirection}
            title="Sophisticated"
            subtitle="skincare"
            mobileDescription="Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs."
            desktopDescription={`Skinstric developed an A.I. that creates a\nhighly-personalized routine tailored to\nwhat your skin needs.`}
          />
          <CTAButton />
        </div>
      </div>
    </main>
  );
};

export default Home;
