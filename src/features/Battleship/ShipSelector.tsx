import React from "react";
import ShipDisplay from "./ShipDisplay";

const ShipSelector = () => {
  const ships = [
    { id: 1, length: 3 },
    { id: 2, length: 3 },
    { id: 3, length: 5 },
    { id: 4, length: 2 },
    { id: 5, length: 4 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {ships.map((ship) => (
        <ShipDisplay key={ship.id} length={ship.length} />
      ))}
    </div>
  );
};

export default ShipSelector;
