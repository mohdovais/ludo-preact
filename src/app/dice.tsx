import { roll } from "../utils/dice";
import { PlayerName } from "../store/constant";
import { Dice as DiceType, Dice } from "../store/state";
import { CSSProperties } from "react";

export interface DiceProps {
  player: PlayerName;
  value: DiceType;
  disabled: boolean;
  onClick: CallableFunction;
  style: CSSProperties | undefined;
}

interface DotProps {
  x: number;
  y: number;
}

interface FaceProps {
  d: Dice;
}

function Dot({ x, y }: DotProps) {
  return (
    <circle
      r="30"
      cx={x}
      cy={y}
      fill="url('#diceDot')"
      stroke="#000"
      stroke-width="5"
    />
  );
}

export function Face({ d }: FaceProps) {
  return (
    <svg viewBox="0 0 300 300" width="100" height="100">
      <defs>
        <radialGradient id="diceDot">
          <stop offset="50%" stop-color="#000" />
          <stop offset="95%" stop-color="hsl(0, 0%, 50%)" />
        </radialGradient>
      </defs>
      <rect
        x="5"
        y="5"
        width="290"
        height="290"
        rx="25"
        fill="hsl(0, 0%, 92%)"
        stroke="hsl(0, 0%, 88%)"
        stroke-width="5"
      />
      {d < 2 ? null : <Dot x={60} y={60} />}
      {d > 3 ? <Dot x={240} y={60} /> : null}
      {d === 6 ? <Dot x={60} y={150} /> : null}
      {d % 2 === 1 ? <Dot x={150} y={150} /> : null}
      {d === 6 ? <Dot x={240} y={150} /> : null}
      {d > 3 ? <Dot x={60} y={240} /> : null}
      {d < 2 ? null : <Dot x={240} y={240} />}
    </svg>
  );
}

export function Dice({ player, value, disabled, onClick, style }: DiceProps) {
  return (
    <button disabled={disabled} onClick={() => onClick(roll())} style={style}>
      Dice {player} <Face d={value} />
    </button>
  );
}
