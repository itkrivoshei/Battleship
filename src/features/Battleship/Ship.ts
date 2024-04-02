export enum Orientation {
  Horizontal,
  Vertical,
}

export class Ship {
  length: number;
  hits: boolean[];
  orientation: Orientation;

  constructor(
    length: number,
    orientation: Orientation = Orientation.Horizontal,
  ) {
    this.length = length;
    this.hits = Array.from({ length }, () => false);
    this.orientation = orientation;
  }

  hit(position: number) {
    if (position < this.length) {
      this.hits[position] = true;
    }
  }

  isHit(position: number): boolean {
    return this.hits[position] === true;
  }

  isSunk(): boolean {
    return this.hits.every((hit) => hit);
  }
}
