export class Ship {
  private readonly length: number;
  private hitCount = 0;

  /**
   * Creates a new Ship instance.
   * @param length - The length of the ship; must be a positive integer.
   */
  constructor(length: number) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error("Ship length must be a positive integer.");
    }
    this.length = length;
  }

  /**
   * Records a hit on the ship.
   * Increments the hit count by one, if the ship is not already sunk.
   */
  public hit(): void {
    if (this.isSunk()) {
      console.warn("Cannot hit a ship that is already sunk.");
      return;
    }
    this.hitCount += 1;
  }

  /**
   * Checks if the ship is sunk.
   * @returns True if the ship is sunk; otherwise, false.
   */
  public isSunk(): boolean {
    return this.hitCount >= this.length;
  }

  /**
   * Gets the length of the ship.
   * @returns The length of the ship.
   */
  public getLength(): number {
    return this.length;
  }

  /**
   * Gets the current hit count.
   * @returns The number of times the ship has been hit.
   */
  public getHitCount(): number {
    return this.hitCount;
  }
}
