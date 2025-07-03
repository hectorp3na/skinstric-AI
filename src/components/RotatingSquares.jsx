import React from "react";

const RotatingSquares = () => {
    return (
        <>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="764"
        height="764"
        viewBox="0 0 764 764"
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-spin-slow"
      >
        <path
          opacity="0.3"
          d="M382 1L763 382L382 763L1 382L382 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="684"
        height="684"
        viewBox="0 0 684 684"
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-spin-slower"
      >
        <path
          opacity="0.6"
          d="M342 1L683 342L342 683L1 342L342 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="604"
        height="604"
        viewBox="0 0 604 604"
        fill="none"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-spin-slowest"
      >
        <path
          d="M302 1L603 302L302 603L1 302L302 1Z"
          stroke="#A0A4AB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.1 8"
        />
      </svg>
      </>
    );
    }

export default RotatingSquares;