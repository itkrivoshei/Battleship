import createShip from "../models/ship";

describe("createShip factory", () => {
  it("initializes with correct length and zero hits", () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
    expect(ship.getHits()).toBe(0);
    expect(ship.isSunk()).toBe(false);
  });

  it("hit() increments hits", () => {
    const ship = createShip(2);
    ship.hit();
    expect(ship.getHits()).toBe(1);
  });

  it("isSunk() returns false when hits are less than length", () => {
    const ship = createShip(4);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  it("isSunk() returns true when hits equal length", () => {
    const ship = createShip(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  it("does not exceed maximum hits", () => {
    const ship = createShip(1);
    ship.hit();
    ship.hit();
    expect(ship.getHits()).toBe(1);
  });
});
