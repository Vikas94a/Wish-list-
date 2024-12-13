import React from "react";
import AnimatedCursor from "react-animated-cursor";
import image from "/public/vite.svg";

export function MouseEffect() {
  return (
    <>
      <div className="App">
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
    </>
  );
}
