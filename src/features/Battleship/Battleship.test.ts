import { Ship } from "./Ship";

describe("Ship", (): void => {
  let testShip: Ship;

  beforeEach(() => {
    testShip = new Ship(3);
  });

  test("should accurately report its length", () => {
    expect(testShip.length).toBe(3);
  });

  test("hit() should record damage at specified position", () => {
    testShip.hit(0);
    expect(testShip.hits[0]).toBe(true);
  });

  test("hit() should not affect other positions", () => {
    testShip.hit(1);
    expect(testShip.hits[0]).toBe(false);
    expect(testShip.hits[2]).toBe(false);
  });

  test("isSunk() returns false if not all positions are hit", () => {
    testShip.hit(0);
    testShip.hit(1);
    expect(testShip.isSunk()).toBe(false);
  });

  test("isSunk() returns true if all positions are hit", () => {
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(true);
  });
});
