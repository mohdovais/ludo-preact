import { roll } from "../utils/dice";

export function Dice({ player, value, disabled, onClick }) {
  return (
    <button disabled={disabled} onClick={() => onClick(roll())}>
      Dice {player} {value}
    </button>
  );
}
