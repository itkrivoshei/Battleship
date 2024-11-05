import type createShip from "./ship";

type Coordinates = [number, number];
type Direction = "horizontal" | "vertical";

function createGameboard() {
  const boardSize = 10;
  const ships: ReturnType<typeof createShip>[] = [];
  const missedAttacks: Coordinates[] = [];
  const shipPositions = new Map<string, ReturnType<typeof createShip>>();

  const isValidPosition = (
    length: number,
    [x, y]: Coordinates,
    direction: Direction,
  ) => {
    if (direction === "horizontal") {
      return x >= 0 && x + length <= boardSize && y >= 0 && y < boardSize;
    } else {
      return x >= 0 && x < boardSize && y >= 0 && y + length <= boardSize;
    }
  };

  const placeShip = (
    ship: ReturnType<typeof createShip>,
    [x, y]: Coordinates,
    direction: Direction,
  ) => {
    if (!isValidPosition(ship.length, [x, y], direction)) return false;

    for (let i = 0; i < ship.length; i++) {
      const pos = direction === "horizontal" ? [x + i, y] : [x, y + i];
      const key = pos.toString();
      if (shipPositions.has(key)) return false;
      shipPositions.set(key, ship);
    }
    ships.push(ship);
    return true;
  };

  const receiveAttack = ([x, y]: Coordinates) => {
    const key = [x, y].toString();
    const ship = shipPositions.get(key);
    if (ship) {
      ship.hit();
      return "hit";
    } else {
      missedAttacks.push([x, y]);
      return "miss";
    }
  };

  const getMissedAttacks = () => [...missedAttacks];

  const areAllShipsSunk = () => ships.every((ship) => ship.isSunk());

  return {
    placeShip,
    receiveAttack,
    getMissedAttacks,
    areAllShipsSunk,
  };
}

export default createGameboard;
