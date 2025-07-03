import React from "react";

const spinKeyframes = `
@keyframes spin-slow {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes spin-slower {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes spin-slowest {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
`;

const PreppingAnalysis = () => {
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  };

  const relativeBoxStyle = {
    position: "relative",
    width: "586px", 
    height: "586px",
    maxWidth: "90vw",
    maxHeight: "80vh",
  };

  const commonSVGStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center",
    pointerEvents: "none",
  };

  const outerDiamondStyle = {
    ...commonSVGStyle,
    width: "586px",
    height: "586px",
    opacity: 1,
    zIndex: 10,
    animation: "spin-slow 20s linear infinite",
  };

  const middleDiamondStyle = {
    ...commonSVGStyle,
    width: "500px",
    height: "500px",
    opacity: 0.6,
    zIndex: 20,
    animation: "spin-slower 20s linear infinite",
  };

  const innerDiamondStyle = {
    ...commonSVGStyle,
    width: "394px",
    height: "394px",
    opacity: 0.6,
    zIndex: 30,
    animation: "spin-slowest 20s linear infinite",
  };

  const textStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "#1A1B1C",
    zIndex: 40,
    pointerEvents: "none",
  };

  return (
    <>
      <style>{spinKeyframes}</style>

      <div style={containerStyle}>
        <div style={relativeBoxStyle}>
          <svg
            width="586"
            height="586"
            viewBox="0 0 586 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={outerDiamondStyle}
          >
            <path
              d="M214.832 1.27523L584.724 214.833L371.167 584.725L1.27481 371.167L214.832 1.27523Z"
              stroke="#A0A4AB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.1 8"
              opacity="0.3"
            />
          </svg>

          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={middleDiamondStyle}
          >
            <path
              d="M250 1.00012L499 250L250 499L1 250L250 1.00012Z"
              stroke="#A0A4AB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.1 8"
              opacity="0.6"
            />
          </svg>

          <svg
            width="394"
            height="394"
            viewBox="0 0 394 394"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={innerDiamondStyle}
          >
            <path
              d="M249.434 1.31224L392.687 249.434L144.565 392.687L1.31178 144.565L249.434 1.31224Z"
              stroke="#A0A4AB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.1 8"
            />
          </svg>

          <div style={textStyle}>PREPARING YOUR ANALYSIS...</div>
        </div>
      </div>
    </>
  );
};

export default PreppingAnalysis;
