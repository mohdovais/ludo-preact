import { useReducer } from "preact/hooks";
import { initialState } from "./store/state";
import { reducer } from "./store/reducer";
import { Board } from "./app/board";
import { Dice } from "./app/dice";
import { PLAYER_A, PLAYER_B, PLAYER_C, PLAYER_D } from "./store/constant";

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPlayer, rolling } = state;
  console.log(state);
  return (
    <div>
      <Dice
        player={PLAYER_A}
        disabled={!(rolling && currentPlayer === PLAYER_A)}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={state[PLAYER_A].roll}
      />
      <Dice
        player={PLAYER_B}
        disabled={!(rolling && currentPlayer === PLAYER_B)}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={state[PLAYER_B].roll}
      />
      <Dice
        player={PLAYER_C}
        disabled={!(rolling && currentPlayer === PLAYER_C)}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={state[PLAYER_C].roll}
      />
      <Dice
        player={PLAYER_D}
        disabled={!(rolling && currentPlayer === PLAYER_D)}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={state[PLAYER_D].roll}
      />
      <Board
        tokens={state.A.tokens.concat(
          state.B.tokens,
          state.C.tokens,
          state.D.tokens
        )}
        onTokenSelect={(token) =>
          dispatch({ type: "move", player: token.player, tokenId: token.id })
        }
      />
    </div>
  );
}
