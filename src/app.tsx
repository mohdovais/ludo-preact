import { useReducer } from "preact/hooks";
import { initialState, Token, Dice as DiceType } from "./store/state";
import { reducer } from "./store/reducer";
import { Board } from "./app/board";
import { Dice } from "./app/dice";
import { PlayerName } from "./store/constant";

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPlayerName, rolling } = state;
  console.log(state);
  return (
    <div>
      <Dice
        player={PlayerName.A}
        disabled={!(rolling && currentPlayerName === PlayerName.A)}
        onClick={(value: DiceType) => dispatch({ type: "roll", value })}
        value={state[PlayerName.A].roll}
        style={{ backgroundColor: "blue", color: "#fff" }}
      />
      <Dice
        player={PlayerName.B}
        disabled={!(rolling && currentPlayerName === PlayerName.B)}
        onClick={(value: DiceType) => dispatch({ type: "roll", value })}
        value={state[PlayerName.B].roll}
        style={{ backgroundColor: "red" }}
      />
      <Dice
        player={PlayerName.C}
        disabled={!(rolling && currentPlayerName === PlayerName.C)}
        onClick={(value: DiceType) => dispatch({ type: "roll", value })}
        value={state[PlayerName.C].roll}
        style={{ backgroundColor: "green", color: "#fff" }}
      />
      <Dice
        player={PlayerName.D}
        disabled={!(rolling && currentPlayerName === PlayerName.D)}
        onClick={(value: DiceType) => dispatch({ type: "roll", value })}
        value={state[PlayerName.D].roll}
        style={{ backgroundColor: "yellow" }}
      />
      <Board
        tokens={state.A.tokens.concat(
          state.B.tokens,
          state.C.tokens,
          state.D.tokens
        )}
        onTokenSelect={(token: Token) =>
          dispatch({ type: "move", player: token.player, tokenId: token.id })
        }
      />
    </div>
  );
}
