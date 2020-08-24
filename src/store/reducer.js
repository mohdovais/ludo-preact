import { produce } from "immer";

export function reducer(state, action) {
  switch (action.type) {
    case "roll":
      console.log(action.value);
      return onRoll(state, action.value);
    case "move":
      return onMove(state, action.player, action.tokenId);
  }
  return state;
}

/**
 *
 * @param {array} tokens
 * @param {number} roll
 */
function canMoveAnyToken(tokens, roll) {
  return tokens.some(({ position }) => {
    const next = position + roll;
    return next > -1 && next < 56;
  });
}

function enableMoveableTokens(tokens, roll) {
  return tokens.map((token) => {
    const next = token.position + roll;
    return Object.assign({}, token, {
      enabled: next > -1 && next < 56,
    });
  });
}

function onRoll(state, roll) {
  const { currentPlayer, allPlayers } = state;
  const player = state[currentPlayer];
  const canMove = canMoveAnyToken(player.tokens, roll);

  if (canMove) {
    return produce(state, (draft) => {
      draft.roll = roll;
      draft[currentPlayer].tokens = enableMoveableTokens(player.tokens, roll);
    });
  }

  return produce(state, (draft) => {
    draft.roll = 0;
    draft.currentPlayer = (allPlayers + allPlayers)[
      allPlayers.indexOf(currentPlayer) + 1
    ];
  });
}

//{ id: 0, player: A, position: INITIAL_POSITION, enabled: false }
function onMove(state, player, tokenId) {
  const token = state[player].tokens[tokenId];
  if (token && token.enabled) {
    return produce(state, (draft) => {
      const { roll, allPlayers, currentPlayer } = draft;

      // disable all tokens for next roll
      draft[player].tokens.forEach((token) => {
        token.enabled = false;
      });

      // move
      draft[player].tokens[tokenId].position += draft.roll;

      // was 6?
      if (roll !== 6) {
        draft.currentPlayer = (allPlayers + allPlayers)[
          allPlayers.indexOf(currentPlayer) + 1
        ];
      }

      draft.roll = 0;
    });
  }

  return state;
}
