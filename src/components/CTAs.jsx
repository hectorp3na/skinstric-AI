import React from "react";
import CTABox from "./CTABox";

const CTAs = ({ hoverDirection, setHoverDirection }) => {
  return (
    <>
      <CTABox
        side="left"
        label="DISCOVER A.I."
        link="/"
        hoverDirection={hoverDirection}
        setHoverDirection={setHoverDirection}
      />
      <CTABox
        side="right"
        label="TAKE TEST"
        link="/testing"
        hoverDirection={hoverDirection}
        setHoverDirection={setHoverDirection}
      />
    </>
  );
};

export default CTAs;