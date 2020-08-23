import { Background } from "./background";
import { path } from "../store/path";

const TOKEN_INITIAL_POSITIONS = {
  A: [
    { x: 150, y: 1050 },
    { x: 350, y: 1050 },
    { x: 150, y: 1250 },
    { x: 350, y: 1250 },
  ],
  B: [
    { x: 150, y: 150 },
    { x: 350, y: 150 },
    { x: 150, y: 350 },
    { x: 350, y: 350 },
  ],
  C: [
    { x: 1050, y: 150 },
    { x: 1250, y: 150 },
    { x: 1050, y: 350 },
    { x: 1250, y: 350 },
  ],
  D: [
    { x: 1050, y: 1050 },
    { x: 1250, y: 1050 },
    { x: 1050, y: 1250 },
    { x: 1250, y: 1250 },
  ],
};

const TOKEN_COLORS = {
  A: "blue",
  B: "red",
  C: "green",
  D: "yellow",
};

function getXY(player, position) {
  const { x, y } = path.getPath(player, position);
  return {
    x: x * 100,
    y: y * 100,
  };
}

export function Board({ tokens, onTokenSelect }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1500 1500"
      id="board"
    >
      <Background />
      {tokens.map((token) => {
        const { id: tokenId, player, position, enabled } = token;
        const xy =
          position === -6
            ? TOKEN_INITIAL_POSITIONS[player][tokenId]
            : getXY(player, position);

        return (
          <use
            key={player + tokenId}
            xlinkHref="#disk"
            fill={TOKEN_COLORS[player]}
            x={xy.x}
            y={xy.y}
            className={enabled && "active"}
            onClick={() => enabled && onTokenSelect(token)}
          />
        );
      })}
    </svg>
  );
}
