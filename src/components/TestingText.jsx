import React, { useState } from "react";

const TestingText = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submmited name", name);

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    setError("");
  }
    return (
        <>
        <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
        CLICK TO TYPE
      </p>
      <form
        className="relative z-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center"></div>
        <input
            className={`text-5xl sm:text-6xl font-normal text-center bg-transparent border-b ${
              error ? "border-red-500" : "border-black"
            } focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10`}
            placeholder="Introduce Yourself"
            type="text"
            autoComplete="off"
            autoFocus
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
          />
          {error && (
            <p className="mt-2 text-red-500 text-sm">{error}</p>
          )}
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
      </>

    );
    }

export default TestingText;