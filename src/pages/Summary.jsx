import React, { useCallback, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hasFetchedRef = useRef(false);

  const rawBase64 =
    location.state?.imageBase64 || localStorage.getItem("imageBase64");

  const prefix = "data:image/png;base64,";
  const base64String = rawBase64?.startsWith("data:image")
    ? rawBase64
    : prefix + rawBase64;
  const apiResult = location.state?.apiResult
    ? location.state.apiResult
    : JSON.parse(localStorage.getItem("apiResult") || "null");

  const [topAge, setTopAge] = useState(null);
  const [topGender, setTopGender] = useState(null);
  const [topRace, setTopRace] = useState(null);
  const [topRaceScore, setTopRaceScore] = useState(0);
  const [originalSelections, setOriginalSelections] = useState({
    race: null,
    age: null,
    gender: null,
  });

  const cleanBase64 = base64String?.startsWith("data:")
    ? base64String.split(",")[1]
    : base64String;

  const confirmHandler = async () => {
    const payload = {
      image: cleanBase64,
      demographics: {
        race: topRace,
        age: topAge,
        gender: topGender,
      },
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }


      setOriginalSelections({
        race: topRace,
        age: topAge,
        gender: topGender,
      });
    } catch (error) {
      console.error("Error sending demographics data:", error);
    }
  };

  const resetHandler = () => {
    setTopRace(originalSelections.race);
    setTopAge(originalSelections.age);
    setTopGender(originalSelections.gender);

    setCategoryOptions((prev) => {
      const resetCategory = (category) =>
        prev[category].map((item) => ({
          ...item,
          active:
            item.label.toLowerCase() ===
            originalSelections[category].toLowerCase(),
        }));

      return {
        race: resetCategory("race"),
        age: resetCategory("age"),
        gender: resetCategory("gender"),
      };
    });
  };

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
        setOriginalSelections({
          race: capitalize(race),
          age,
          gender,
        });

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
     if (hasFetchedRef.current) return;
    if (!base64String || !apiResult) {
      navigate("/select");
      return;
    }
    fetchDemographics(apiResult);
    hasFetchedRef.current = true;
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
    <>
   <div className="h-screen md:h-[90vh] flex flex-col md:mt-5">
    <div className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
    <div className="__className_5f0add antialiased text-[#1A1B1C] h-screen flex flex-col">
      <div className="scroll-on-mobile max-w-full flex mx-5 flex-col items-center bg-white text-center px-4 md:px-0" style={{ paddingRight: "16px", paddingLeft: "16px" }}>
        <div className="relative w-full max-w-[1440px] mx-auto min-h-screen pb-[100px]">

          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0 md:mt-20" style={{marginTop: "0px"}}>
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


        <div className="absolute bottom-10 md:bottom-8 w-full flex justify-between md:px-9 px-6 z-50">

          <button
            className="cursor-pointer px-6"
            aria-label="Back"
            onClick={() =>
              navigate("/select", {
                state: { imageBase64: base64String, apiResult },
              })
            }
          >
            <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45">
              <span className="rotate-[-45deg] text-xs font-semibold">
                BACK
              </span>
            </div>
          </button>


          {topRace !== originalSelections.race ||
          topAge !== originalSelections.age ||
          topGender !== originalSelections.gender ? (
            <div className="flex gap-4">
         
              <button
                aria-label="Reset"
                onClick={resetHandler}
                className="transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <svg
                  width="75"
                  height="37"
                  viewBox="0 0 75 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <rect x="1" y="1" width="73" height="35" stroke="#1A1B1C" />
                  <path
                    d="M25.064 21.382C24.994 20.486 24.56 19.758 23.888 19.338C24.7 18.918 25.204 18.232 25.204 17.224C25.204 15.446 24 14.2 21.956 14.2H17.938V24H19.8V20.318H21.914C22.642 20.318 23.16 20.85 23.23 21.592L23.468 24H25.302L25.064 21.382ZM21.872 15.754C22.964 15.754 23.412 16.44 23.412 17.224C23.412 18.008 22.964 18.722 21.872 18.722H19.8V15.754H21.872ZM33.6055 24V22.39H28.7755V19.772H32.5275V18.176H28.7755V15.796H33.4515V14.2H26.9275V24H33.6055ZM37.9886 24.112C40.1446 24.112 41.6426 23.006 41.6426 21.186C41.6426 17.364 36.3086 18.988 36.3086 16.818C36.3086 16.132 36.9106 15.684 37.8766 15.684C38.9126 15.684 39.5846 16.258 39.6686 17.112H41.4326C41.3486 15.278 39.9486 14.088 37.8766 14.088C35.8886 14.088 34.5026 15.208 34.5026 16.818C34.5026 20.57 39.7666 19.114 39.7666 21.214C39.7666 22.082 39.0386 22.502 37.9886 22.502C36.8126 22.502 36.0846 21.802 35.9866 20.71H34.2086C34.3066 22.768 35.7626 24.112 37.9886 24.112ZM49.3698 24V22.39H44.5398V19.772H48.2917V18.176H44.5398V15.796H49.2158V14.2H42.6917V24H49.3698ZM54.5368 24V15.796H57.4908V14.2H49.7208V15.796H52.6888V24H54.5368Z"
                    fill="#1A1B1C"
                  />
                </svg>
              </button>

    
              <button
                aria-label="Confirm"
                onClick={confirmHandler}
                className="transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <svg
                  width="95"
                  height="35"
                  viewBox="0 0 95 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <rect width="95" height="35" fill="#1A1B1C" />
                  <path
                    d="M21.362 23.112C23.77 23.112 25.562 21.726 25.758 19.696H23.91C23.742 20.76 22.706 21.502 21.362 21.502C19.654 21.502 18.366 20.326 18.366 18.1C18.366 15.874 19.654 14.684 21.362 14.684C22.678 14.684 23.714 15.426 23.854 16.504H25.786C25.52 14.474 23.728 13.088 21.362 13.088C18.8 13.088 16.504 14.768 16.504 18.1C16.504 21.432 18.758 23.112 21.362 23.112ZM31.3519 23.112C34.1939 23.112 36.2939 20.984 36.2939 18.1C36.2939 15.216 34.1939 13.088 31.3519 13.088C28.4959 13.088 26.3959 15.216 26.3959 18.1C26.3959 20.984 28.4959 23.112 31.3519 23.112ZM31.3379 21.502C29.5599 21.502 28.2579 20.06 28.2579 18.1C28.2579 16.14 29.5599 14.684 31.3379 14.684C33.1299 14.684 34.4319 16.14 34.4319 18.1C34.4319 20.06 33.1299 21.502 31.3379 21.502ZM39.308 23V16.098L43.564 23H45.552V13.2H43.704V20.116L39.462 13.2H37.46V23H39.308ZM48.9948 23V18.884H52.7468V17.288H48.9948V14.796H53.6708V13.2H47.1468V23H48.9948ZM56.6995 23V13.2H54.8375V23H56.6995ZM65.416 20.382C65.346 19.486 64.912 18.758 64.24 18.338C65.052 17.918 65.556 17.232 65.556 16.224C65.556 14.446 64.352 13.2 62.308 13.2H58.29V23H60.152V19.318H62.266C62.994 19.318 63.512 19.85 63.582 20.592L63.82 23H65.654L65.416 20.382ZM62.224 14.754C63.316 14.754 63.764 15.44 63.764 16.224C63.764 17.008 63.316 17.722 62.224 17.722H60.152V14.754H62.224ZM69.0155 23V16.504L71.6895 23H73.0895L75.7495 16.504V23H77.4855V13.2H75.3575L72.3895 20.438L69.4215 13.2H67.2795V23H69.0155Z"
                    fill="#FCFCFC"
                  />
                </svg>
              </button>
            </div>
          ) : (
    
            <button
              aria-label="Proceed"
              onClick={() => navigate("/")}
              className="cursor-pointer px-6"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45">
                <span className="rotate-[-45deg] text-xs font-semibold">
                  HOME
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
      </>
  );
};
export default Summary;
