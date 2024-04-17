import React, { useState } from "react";

const ShipDisplay = ({ length }) => {
  const [orientation, setOrientation] = useState("horizontal");

  const gridSize = Math.max(3, length);
  const middleIndex = Math.floor(gridSize / 2);

  const toggleOrientation = () => {
    setOrientation(orientation === "horizontal" ? "vertical" : "horizontal");
  };

  const shipStyle = {
    gridRowStart:
      orientation === "horizontal"
        ? middleIndex + 1
        : middleIndex - Math.floor(length / 2) + 1,
    gridRowEnd:
      orientation === "horizontal"
        ? middleIndex + 1
        : middleIndex + Math.floor(length / 2) + 1,
    gridColumnStart:
      orientation === "horizontal"
        ? middleIndex - Math.floor(length / 2) + 1
        : middleIndex + 1,
    gridColumnEnd:
      orientation === "horizontal"
        ? middleIndex + Math.floor(length / 2) + 1
        : middleIndex + 1,
    backgroundColor: "navy",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${gridSize}, 50px)`,
        gridTemplateColumns: `repeat(${gridSize}, 50px)`,
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={toggleOrientation}
    >
      <div style={shipStyle}></div>
    </div>
  );
};

export default ShipDisplay;
