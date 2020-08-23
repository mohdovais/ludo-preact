import { useReducer } from "preact/hooks";
import { initialState } from "./store/state";
import { reducer } from "./store/reducer";
import { Board } from "./app/board";
import { Dice } from "./app/dice";

export function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPlayer, roll } = state;
  console.log(state);
  return (
    <div>
      <Dice
        player="A"
        disabled={roll > 0 || currentPlayer !== "A"}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={currentPlayer === "A" ? roll : 0}
      />
      <Dice
        player="B"
        disabled={roll > 0 || currentPlayer !== "B"}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={currentPlayer === "B" ? roll : 0}
      />
      <Dice
        player="C"
        disabled={roll > 0 || currentPlayer !== "C"}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={currentPlayer === "C" ? roll : 0}
      />
      <Dice
        player="D"
        disabled={roll > 0 || currentPlayer !== "D"}
        onClick={(value) => dispatch({ type: "roll", value })}
        value={currentPlayer === "D" ? roll : 0}
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
