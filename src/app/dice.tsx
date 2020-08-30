import { roll } from "../utils/dice";
import { PlayerName } from "../store/constant";
import { Dice as DiceType } from "../store/state";
import { CSSProperties } from "react";

export interface DiceProps {
  player: PlayerName
  value: DiceType
  disabled: boolean
  onClick: CallableFunction
  style: CSSProperties | undefined
}

export function Dice({ player, value, disabled, onClick, style }: DiceProps) {
  return (
    <button disabled={disabled} onClick={() => onClick(roll())} style={style}>
      Dice {player} {value}
    </button>
  );
}
