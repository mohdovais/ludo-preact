import { produce, current } from "immer";
import { getMoveableTokens, getNextPlayer, continueRolling } from "./player";
import { MAX_POSITION } from "./constant";
import { path } from "./path";

export const reducer = produce((state, action) => {
  switch (action.type) {
    case "roll":
      console.log(action.value);
      onRoll(state, action.value);
      break;
    case "move":
      onMove(state, action.player, action.tokenId);
  }
});

/**
 * if player can move any tokens
 *    if only one token can move; move automatically
 *    else enable playable tokens to select
 * else move to next player
 *
 * @param {*} state
 * @param {*} roll
 */
function onRoll(state, roll) {
  const { currentPlayer } = state;
  const currentPlayerObject = state[currentPlayer];
  const moveableTokens = getMoveableTokens(currentPlayerObject.tokens, roll);

  state.rolling = false;
  currentPlayerObject.roll = roll;

  if (moveableTokens.length > 0) {
    if (moveableTokens.length === 1) {
      onMove(state, currentPlayer, moveableTokens[0].id, true);
    } else {
      moveableTokens.forEach((token) => {
        token.enabled = true;
      });
    }
  } else {
    continueRolling(state, true);
  }
}

//{ id: 0, player: A, position: INITIAL_POSITION, enabled: false }
function onMove(state, playerName, tokenId, forced) {
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
      let beating = false;
      state.allPlayers
        .filter((player) => player !== playerName)
        .forEach((player) => {
          state[player].tokens.forEach((opponent) => {
            if (opponent.x === token.x && opponent.y === token.y) {
              opponent.x = -1;
              opponent.y = -1;
              opponent.position = -6;
              player.roll = 0;
              state.rolling = true;
              beating = true;
            }
          });
        });

      if (beating) {
        return continueRolling(state);
      }
    }

    continueRolling(state, roll !== 6);
  }
}
