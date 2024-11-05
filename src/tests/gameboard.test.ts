import createGameboard from "../models/gameboard";
import createShip from "../models/ship";

describe("createGameboard factory", () => {
  let gameboard: ReturnType<typeof createGameboard>;

  beforeEach(() => {
    gameboard = createGameboard();
  });

  it("places ships at specific coordinates", () => {
    const ship = createShip(3);
    const success = gameboard.placeShip(ship, [0, 0], "horizontal");
    expect(success).toBe(true);
  });

  it("does not allow placing ships out of bounds", () => {
    const ship = createShip(4);
    const success = gameboard.placeShip(ship, [9, 9], "horizontal");
    expect(success).toBe(false);
  });

  it("records hit when attack hits a ship", () => {
    const ship = createShip(2);
    gameboard.placeShip(ship, [1, 1], "vertical");
    const result = gameboard.receiveAttack([1, 1]);
    expect(result).toBe("hit");
    expect(ship.getHits()).toBe(1);
  });

  it("records miss when attack misses", () => {
    const result = gameboard.receiveAttack([5, 5]);
    expect(result).toBe("miss");
    expect(gameboard.getMissedAttacks()).toContainEqual([5, 5]);
  });

  it("keeps track of missed attacks", () => {
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([3, 3]);
    expect(gameboard.getMissedAttacks()).toEqual([
      [2, 2],
      [3, 3],
    ]);
  });

  it("reports when all ships are sunk", () => {
    const ship1 = createShip(1);
    const ship2 = createShip(1);
    gameboard.placeShip(ship1, [0, 0], "horizontal");
    gameboard.placeShip(ship2, [1, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 0]);
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  it("reports when not all ships are sunk", () => {
    const ship = createShip(2);
    gameboard.placeShip(ship, [0, 0], "horizontal");
    gameboard.receiveAttack([0, 0]);
    expect(gameboard.areAllShipsSunk()).toBe(false);
  });
});
