import React from "react";

const TestingText = () => {
    return (
        <>
        <p className="text-sm text-gray-400 tracking-wider uppercase mb-1">
        CLICK TO TYPE
      </p>
      <form
        className="relative z-10"
        onSubmit={(e) => {
          e.preventDefault();
          throw new Error("React form unexpectedly submitted.");
        }}
      >
        <div className="flex flex-col items-center"></div>
        <input
          className="text-5xl sm:text-6xl font-normal text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[372px] sm:w-[432px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          placeholder="Introduce Yourself"
          type="text"
          autoComplete="off"
          autoFocus
          name="name"
        />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
      </>

    );
    }

export default TestingText;