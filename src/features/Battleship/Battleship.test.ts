// import { Ship, Orientation } from "./Ship";
// import { Gameboard } from "./Gameboard";

// describe("Ship", (): void => {
//   let testShip: Ship;

//   beforeEach(() => {
//     testShip = new Ship(3);
//   });

//   test("should accurately report its length", () => {
//     expect(testShip.length).toBe(3);
//   });

//   test("hit() should record damage at specified position", () => {
//     testShip.hit(0);
//     expect(testShip.hits[0]).toBe(true);
//   });

//   test("hit() should not affect other positions", () => {
//     testShip.hit(1);
//     expect(testShip.hits[0]).toBe(false);
//     expect(testShip.hits[2]).toBe(false);
//   });

//   test("isSunk() returns false if not all positions are hit", () => {
//     testShip.hit(0);
//     testShip.hit(1);
//     expect(testShip.isSunk()).toBe(false);
//   });

//   test("isSunk() returns true if all positions are hit", () => {
//     testShip.hit(0);
//     testShip.hit(1);
//     testShip.hit(2);
//     expect(testShip.isSunk()).toBe(true);
//   });
// });

// describe("Gameboard", (): void => {
//   let gameboard: Gameboard;

//   beforeEach(() => {
//     gameboard = new Gameboard();
//   });

//   test("should be able to place ships at specific coordinates", () => {
//     const ship = new Ship(3);
//     gameboard.placeShip(ship, { x: 2, y: 3 });
//     expect(gameboard.hasShipAt({ x: 2, y: 3 })).toBe(true);
//   });

//   test("receiveAttack should correctly record hits on ships", () => {
//     const ship = new Ship(3);
//     gameboard.placeShip(ship, { x: 5, y: 5 });
//     gameboard.receiveAttack({ x: 5, y: 5 });
//     expect(ship.isHit(0)).toBe(true);
//   });

//   test("receiveAttack should record missed shots", () => {
//     gameboard.receiveAttack({ x: 1, y: 1 });
//     expect(gameboard.isMissedAttack({ x: 1, y: 1 })).toBe(true);
//   });

//   test("should report whether all ships have been sunk with mixed orientations", () => {
//     const ship1 = new Ship(2, Orientation.Horizontal);
//     gameboard.placeShip(ship1, { x: 0, y: 0 });

//     const ship2 = new Ship(3, Orientation.Vertical);
//     gameboard.placeShip(ship2, { x: 4, y: 1 });

//     gameboard.receiveAttack({ x: 0, y: 0 });
//     gameboard.receiveAttack({ x: 1, y: 0 });

//     gameboard.receiveAttack({ x: 4, y: 1 });
//     gameboard.receiveAttack({ x: 4, y: 2 });
//     gameboard.receiveAttack({ x: 4, y: 3 });

//     expect(gameboard.areAllShipsSunk()).toBe(true);
//   });
// });
