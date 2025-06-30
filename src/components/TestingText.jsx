import React, { useState } from "react";

const TestingText = ({
  isLoading,
  setIsLoading,
  isSubmitted,
  setIsSubmitted,
}) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      if (!name.trim()) {
        setError("Please enter your name");
        return;
      }

      setError("");
      setStep(2);
    } else if (step === 2) {
      if (!city.trim()) {
        setError("Please enter your city");
        return;
      }

      setError("");
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
    }
  };
  return (
    <div className="relative min-h-screen px-4">
      <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
        {step === 1
          ? "CLICK TO TYPE"
          : isSubmitted
          ? ""
          : isLoading
          ? ""
          : "ENTER YOUR CITY"}
      </p>

      {isLoading ? (
        <div className="flex flex-col items-center mt-6">
          <p className="text-2xl font-semibold text-[#1A1B1C]">
            Processing submission{" "}
            <span className="mt-2 relative dot-ellipsis"></span>
          </p>
        </div>
      ) : !isSubmitted ? (
        <form className="relative z-10" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <input
              className={`text-5xl sm:text-6xl font-normal text-center bg-transparent border-b ${
                error ? "border-red-500" : "border-black"
              } focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10`}
              placeholder={step === 1 ? "Introduce Yourself" : "Your City Name"}
              type="text"
              autoComplete="off"
              autoFocus
              name={step === 1 ? "name" : "city"}
              value={step === 1 ? name : city}
              onChange={(e) => {
                if (step === 1) {
                  setName(e.target.value);
                } else {
                  setCity(e.target.value);
                }
                if (error) setError("");
              }}
            />
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </div>
          <button type="submit" className="sr-only">
            Submit
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center mt-6">
          <p className="text-3xl font-semibold text-[#1A1B1C]">Thank you!</p>
          <p className="mt-2 text-lg text-gray-600">Proceed to the next step</p>
        </div>
      )}
    </div>
  );
};

export default TestingText;
