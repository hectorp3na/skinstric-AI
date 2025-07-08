import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const base64String =
    location.state?.imageBase64 || localStorage.getItem("imageBase64");
  const apiResult = location.state?.apiResult
    ? location.state.apiResult
    : JSON.parse(localStorage.getItem("apiResult") || "null");

  const [topAge, setTopAge] = useState(null);
  const [topGender, setTopGender] = useState(null);
  const [topRace, setTopRace] = useState(null);
  const [topRaceScore, setTopRaceScore] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState("race");
  const [categoryOptions, setCategoryOptions] = useState({});

  const radius = 192;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const getTopScore = () => {
    if (selectedCategory === "race") return topRaceScore;
    const selected = categoryOptions[selectedCategory]?.find(
      (item) => item.active
    );
    return selected ? parseFloat(selected.percent) / 100 : 0;
  };

  const strokeDashoffset = circumference - getTopScore() * circumference;

  const topEntry = useCallback((obj) => {
    if (!obj || Object.keys(obj).length === 0) return [null, 0];
    return Object.entries(obj).reduce((a, b) => (a[1] > b[1] ? a : b));
  }, []);

  const fetchDemographics = useCallback(
    (data) => {
      try {
        const capitalize = (str) => {
          if (!str || typeof str !== "string") return str;
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        };

        const [age] = topEntry(data.age);
        const [genderRaw] = topEntry(data.gender);
        const gender = capitalize(genderRaw);
        const [race, raceScore] = topEntry(data.race);

        setTopAge(age);
        setTopGender(capitalize(gender));
        setTopRace(capitalize(race));
        setTopRaceScore(raceScore);

        const formatOptions = (category, top) =>
          Object.entries(data[category])
            .sort((a, b) => b[1] - a[1])
            .map(([label, value]) => ({
              label: capitalize(label),
              percent: (value * 100).toFixed(0) + "%",
              active: label.toLowerCase() === top.toLowerCase(),
            }));

        setCategoryOptions({
          race: formatOptions("race", race),
          age: formatOptions("age", age),
          gender: formatOptions("gender", gender),
        });
      } catch (error) {
        console.error("Error fetching demographics:", error);
      }
    },
    [topEntry]
  );

  useEffect(() => {
    if (location.state?.imageBase64 && location.state?.apiResult) {
      localStorage.setItem("imageBase64", location.state.imageBase64);
      localStorage.setItem(
        "apiResult",
        JSON.stringify(location.state.apiResult)
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (!base64String || !apiResult) {
      navigate("/select");
      return;
    }
    fetchDemographics(apiResult);
  }, [base64String, apiResult, navigate, fetchDemographics]);

  const handleOptionClick = (label) => {
    const lowerLabel = label.toLowerCase();

    if (selectedCategory === "race") {
      setTopRace(label);
      const selectedOption = categoryOptions["race"]?.find(
        (o) => o.label.toLowerCase() === lowerLabel
      );
      setTopRaceScore(
        selectedOption ? parseFloat(selectedOption.percent) / 100 : 0
      );
    } else if (selectedCategory === "age") {
      setTopAge(label);
    } else if (selectedCategory === "gender") {
      setTopGender(label);
    }

    setCategoryOptions((prev) => {
      const updatedCategory = prev[selectedCategory]?.map((item) => ({
        ...item,
        active: item.label.toLowerCase() === lowerLabel,
      }));

      return {
        ...prev,
        [selectedCategory]: updatedCategory,
      };
    });
  };

  return (
    <div className="__className_5f0add antialiased text-[#1A1B1C] h-screen flex flex-col">
      <div className="scroll-on-mobile max-w-full flex mx-5 flex-col items-center bg-white text-center px-4 md:px-0">
        <div className="relative w-full max-w-[1440px] mx-auto pb-40">
          {/* Header */}
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0 md:mt-20">
            <h2 className="text-base font-semibold mb-1 leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">
              PREDICTED RACE & AGE
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-20 md:mb-0">
            {/* First Column */}
            <div className="space-y-3 md:flex md:flex-col">
              {[
                { label: topRace || "N/A", type: "race" },
                { label: topAge || "N/A", type: "age" },
                { label: topGender || "N/A", type: "gender" },
              ].map(({ label, type }) => (
                <button
                  key={type}
                  onClick={() => setSelectedCategory(type)}
                  className={`block w-full px-4 py-3 text-left border-t relative z-10 transition-all duration-150 ease-out cursor-pointer
                    ${
                      selectedCategory === type
                        ? "bg-[#1A1B1C] text-white hover:bg-black"
                        : "bg-[#F3F3F4] hover:bg-[#E1E1E2] hover:scale-[1.01]"
                    }`}
                >
                  <p className="text-base font-semibold">{label}</p>
                  <h4 className="text-base font-semibold mb-1 uppercase">
                    {type}
                  </h4>
                </button>
              ))}
            </div>

            {/* Second Column */}
            <div className="relative bg-gray-100 w-full h-[540px] md:h-[560px] flex flex-col items-center justify-center border-t overflow-visible ">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                {(() => {
                  const active = categoryOptions[selectedCategory]?.find(
                    (o) => o.active
                  );
                  return selectedCategory === "age"
                    ? `${active?.label ?? selectedCategory.toUpperCase()} y.o.`
                    : active?.label || selectedCategory.toUpperCase();
                })()}
              </p>
              <div className="relative w-full aspect-square max-w-[384px] md:max-w-[340px] lg:max-w-[300px] xl:max-w-[280px] 2xl:max-w-[240px] flex items-center justify-center mt-12 mb-8">
                <div className="w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform={`rotate(-90, ${radius}, ${radius})`}>
                      <circle
                        stroke="#C1C2C3"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                      />
                      <circle
                        stroke="#1A1B1C"
                        fill="transparent"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        style={{ transition: "stroke-dashoffset 0.5s ease" }}
                      />
                    </g>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl md:text-[40px] font-normal">
                      {Math.round(getTopScore() * 100)}
                      <span className="absolute text-xl md:text-3xl">%</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            {/* Third Column */}
            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base font-medium mb-2 uppercase">
                    {selectedCategory}
                  </h4>
                  <h4 className="text-base font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>
                {categoryOptions[selectedCategory]?.map(
                  ({ label, percent, active }, idx) => (
                    <button
                      key={idx}
                      
                      onClick={() => handleOptionClick(label)}
                      className={`flex w-full px-4 py-3 text-left items-center justify-between relative z-10 transition-all duration-150 ease-out cursor-pointer
                        ${
                          active
                            ? "bg-[#1A1B1C] text-white hover:bg-black"
                            : "bg-transparent hover:bg-[#E1E1E2] hover:scale-[1.01]"
                        }`}
                    >
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
                            stroke={active ? "#FFFFFF" : "#1A1B1C"}
                          />
                        </svg>
                        <span className="font-normal text-base">{label}</span>
                      </div>
                      <span className="font-normal text-base">{percent}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="fixed bottom-[38.5px] md:bottom-8 W-95 max-w-[1440px] flex justify-between md:px-9 px-4 z-50">
          <button
          
            aria-label="Back"
            onClick={() =>
              navigate("/select", {
                state: { imageBase64: base64String, apiResult },
              })
            }
          >
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
          </button>

          <button aria-label="Proceed" onClick={() => navigate("/")}>
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
