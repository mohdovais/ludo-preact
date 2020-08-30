import style from "./token.module.css";

export interface TokenProps {
  fill: string
  x: number
  y: number
  active: boolean
  onClick: CallableFunction
}

export function Token({ fill, x, y, active, onClick }: TokenProps) {
  return (
    <g>
      {active ? (
        <circle cx={x + 50} cy={y + 50} r="40" className={style.highlight}></circle>
      ) : null}
      <circle
        cx={x + 50}
        cy={y + 50}
        r="32"
        style={{ filter: "drop-shadow(0 0 3px #000)", stroke: "black" }}
        fill={fill}
        className={active && style.active}
        onClick={active ? () => onClick() : undefined}
      />
    </g>
  );
}
