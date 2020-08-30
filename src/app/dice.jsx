import { roll } from "../utils/dice";

export function Dice({ player, value, disabled, onClick, style }) {
  return (
    <button disabled={disabled} onClick={() => onClick(roll())} style={style}>
      Dice {player} {value}
    </button>
  );
}
