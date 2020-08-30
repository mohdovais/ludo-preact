import { Background } from "./background";
import { TOKEN_COLORS, TOKEN_INITIAL_POSITIONS } from "./constant";

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
        const { id: tokenId, player, position, enabled, x, y } = token;
        const xy =
          position === -6
            ? TOKEN_INITIAL_POSITIONS[player][tokenId]
            : {
                x: x * 100,
                y: y * 100,
              };

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
