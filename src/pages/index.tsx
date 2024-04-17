import Gameboard from "../features/Battleship/Gameboard";
import ShipSelector from "../features/Battleship/ShipSelector";

export default function Home() {
  return (
    <div>
      <ShipSelector />
      <Gameboard />
    </div>
  );
}
