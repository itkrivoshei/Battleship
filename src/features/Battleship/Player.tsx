// import { type Gameboard } from "./Gameboard";

// export class Player {
//   private gameboard: Gameboard;
//   private enemyBoard: Gameboard;
//   private previousAttacks: Set<string>;

//   constructor(gameboard: Gameboard, enemyBoard: Gameboard) {
//     this.gameboard = gameboard;
//     this.enemyBoard = enemyBoard;
//     this.previousAttacks = new Set();
//   }

//   attack(coordinate: { x: number; y: number }) {
//     this.enemyBoard.receiveAttack(coordinate);
//   }

//   randomAttack() {
//     let attackMade = false;
//     while (!attackMade) {
//       const x = Math.floor(Math.random() * 10);
//       const y = Math.floor(Math.random() * 10);
//       const attackCoordinate = `${x},${y}`;

//       if (!this.previousAttacks.has(attackCoordinate)) {
//         this.enemyBoard.receiveAttack({ x, y });
//         this.previousAttacks.add(attackCoordinate);
//         attackMade = true;
//       }
//     }
//   }
// }
