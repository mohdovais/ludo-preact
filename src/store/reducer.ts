import { produce, current } from "immer";
import { getMoveableTokens, continueRolling } from "./player";
import { MAX_POSITION, PlayerName } from "./constant";
import { path } from "./path";
import { GameState, Dice } from "./state";

export const reducer = produce((state: GameState, action) => {
  switch (action.type) {
    case "roll":
      console.log(action.value);
      onRoll(state, action.value);
      break;
    case "move":
      onMove(state, action.player, action.tokenId, false);
  }
});

/**
 * if player can move any tokens
 *    if only one token can move; move automatically
 *    else enable playable tokens to select
 * else move to next player
 */
function onRoll(state: GameState, roll: Dice) {
  const { currentPlayerName } = state;
  const currentPlayer = state[currentPlayerName];
  const moveableTokens = getMoveableTokens(currentPlayer.tokens, roll);

  state.rolling = false;
  currentPlayer.roll = roll;

  if (moveableTokens.length > 0) {
    if (moveableTokens.length === 1) {
      onMove(state, currentPlayerName, moveableTokens[0].id, true);
    } else {
      moveableTokens.forEach((token) => {
        token.enabled = true;
      });
    }
  } else {
    continueRolling(state, true);
  }
}

function onMove(
  state: GameState,
  playerName: PlayerName,
  tokenId: number,
  forced: boolean
) {
  const player = state[playerName];
  const { tokens } = player;
  const token = tokens.find((token) => token.id === tokenId);

  if (token && (forced || token.enabled)) {
    const { roll } = state[playerName];

    // disable all tokens for next roll
    tokens.forEach((token) => {
      token.enabled = false;
    });

    // move
    token.position += player.roll;
    const path0 = path[playerName][token.position];
    token.x = path0.x;
    token.y = path0.y;

    if (token.position === MAX_POSITION) {
      // @TODO make winner
      const won = tokens.every(({ position }) => position === MAX_POSITION);
      return continueRolling(state, won);
    }

    if (!path[playerName][token.position].star) {
      let opponentTokenRemoved = false;
      state.allPlayerNames
        .filter((name) => name !== playerName)
        .forEach((name) => {
          state[name].tokens.forEach((opponent) => {
            if (opponent.x === token.x && opponent.y === token.y) {
              opponent.x = -1;
              opponent.y = -1;
              opponent.position = -6;
              opponentTokenRemoved = true;
            }
          });
        });

      if (opponentTokenRemoved) {
        return continueRolling(state, false);
      }
    }

    continueRolling(state, roll !== 6);
  }
}
