import { Background } from "./background";
import { TOKEN_COLORS, TOKEN_INITIAL_POSITIONS } from "./constant";
import { Token as TokenComponent } from "./token";
import { Token as TokenType } from "../store/state";

interface BoardProps {
  tokens: TokenType[]
  onTokenSelect: CallableFunction
}

export function Board(props: BoardProps) {
  const { tokens, onTokenSelect } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1500 1500"
      id="board"
    >
      <Background />
      {tokens.map((token) => {
        const { id: tokenId, player: playerName, position, enabled, x, y } = token;
        const xy =
          position === -6
            ? TOKEN_INITIAL_POSITIONS[playerName][tokenId]
            : {
              x: x * 100,
              y: y * 100,
            };

        return (
          <TokenComponent
            key={playerName + tokenId}
            fill={TOKEN_COLORS[playerName]}
            x={xy.x}
            y={xy.y}
            active={enabled}
            onClick={() => onTokenSelect(token)}
          />
        );
      })}
    </svg>
  );
}
