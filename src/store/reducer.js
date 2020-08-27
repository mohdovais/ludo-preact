import { produce } from "immer";

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
    state.roll = roll;
    //state[currentPlayer].tokens = enableMoveableTokens(player.tokens, roll);
    player.tokens.forEach((token) => {
      const next = token.position + roll;
      return Object.assign({}, token, {
        enabled: next > -1 && next < 56,
      });
    });
  } else {
    state.roll = 0;
    state.currentPlayer = (allPlayers + allPlayers)[
      allPlayers.indexOf(currentPlayer) + 1
    ];
  }
}

//{ id: 0, player: A, position: INITIAL_POSITION, enabled: false }
function onMove(state, player, tokenId) {
  const token = state[player].tokens[tokenId];
  if (token && token.enabled) {
    const { roll, allPlayers, currentPlayer } = state;

    // disable all tokens for next roll
    state[player].tokens.forEach((token) => {
      token.enabled = false;
    });

    // move
    state[player].tokens[tokenId].position += state.roll;

    // was 6?
    if (roll !== 6) {
      state.currentPlayer = (allPlayers + allPlayers)[
        allPlayers.indexOf(currentPlayer) + 1
      ];
    }

    state.roll = 0;
  }
}
