export class Ship {
  length: number;
  hits: boolean[];

  constructor(length: number) {
    this.length = length;
    this.hits = Array(length).fill(false) as boolean[];
  }

  hit(position: number) {
    this.hits[position] = true;
  }

  isSunk() {
    return this.hits.every((hit) => hit === true);
  }
}
