// import { type Ship, Orientation } from "./Ship";

// interface Coordinate {
//   x: number;
//   y: number;
// }

// export class Gameboard {
//   private ships: { ship: Ship; position: Coordinate }[] = [];
//   private attacks: Coordinate[] = [];
//   private misses: Coordinate[] = [];

//   placeShip(ship: Ship, position: Coordinate) {
//     this.ships.push({ ship, position });
//   }

//   receiveAttack(attackCoordinate: Coordinate) {
//     let hitFound = false;

//     for (const { ship, position } of this.ships) {
//       let shipOccupiesCoordinate = false;

//       if (ship.orientation === Orientation.Horizontal) {
//         const endPositionX = position.x + ship.length - 1;
//         shipOccupiesCoordinate =
//           attackCoordinate.y === position.y &&
//           attackCoordinate.x >= position.x &&
//           attackCoordinate.x <= endPositionX;
//       } else {
//         const endPositionY = position.y + ship.length - 1;
//         shipOccupiesCoordinate =
//           attackCoordinate.x === position.x &&
//           attackCoordinate.y >= position.y &&
//           attackCoordinate.y <= endPositionY;
//       }

//       if (shipOccupiesCoordinate) {
//         const hitPosition =
//           ship.orientation === Orientation.Horizontal
//             ? attackCoordinate.x - position.x
//             : attackCoordinate.y - position.y;
//         ship.hit(hitPosition);
//         hitFound = true;
//         break;
//       }
//     }

//     if (!hitFound) {
//       this.misses.push(attackCoordinate);
//     }
//     this.attacks.push(attackCoordinate);
//   }

//   hasShipAt(coordinate: Coordinate): boolean {
//     return this.ships.some(
//       ({ position }) =>
//         position.x === coordinate.x && position.y === coordinate.y,
//     );
//   }

//   isMissedAttack(coordinate: Coordinate): boolean {
//     return this.misses.some(
//       (miss) => miss.x === coordinate.x && miss.y === coordinate.y,
//     );
//   }

//   areAllShipsSunk(): boolean {
//     return this.ships.every(({ ship }) => ship.isSunk());
//   }
// }

const Gameboard = () => {
  const gridSize = 10;
  const grid = Array.from({ length: gridSize }, (_, i) => i);

  return (
    <div className="gameboard">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {grid.map((col, colIndex) => (
            <div key={colIndex} className="grid-cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gameboard;
