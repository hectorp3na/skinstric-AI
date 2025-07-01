import React from "react";
import ResultsBoxes from "../components/ResultsBoxes";
import BackButton from "../components/BackButton";

const Result = () => {
  return (
    <div className="__className_5f0add antialiased text-[#1A1B1C]">
      <div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>

        <ResultsBoxes />
        <BackButton />
      </div>
    </div>
  );
};

export default Result;
