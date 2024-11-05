function createShip(length: number) {
  let hits = 0;

  const hit = () => {
    if (hits < length) {
      hits += 1;
    }
  };

  const isSunk = () => hits >= length;

  const getHits = () => hits;

  return {
    length,
    hit,
    isSunk,
    getHits,
  };
}

export default createShip;
