/**
 *
 * @param {array} tokens
 * @param {number} roll
 * @returns {array}
 */
export function getMoveableTokens(tokens, roll) {
  return tokens.filter(({ position }) => {
    const next = position + roll;
    return next > -1 && next < 56;
  });
}

/**
 *
 * @param {array} allPlayers
 * @param {string} currentPlayer
 */
function getNextPlayer2(allPlayers, currentPlayer) {
  const allPlayers2 = allPlayers.concat(allPlayers);
  const currentPlayerIndex = allPlayers.indexOf(currentPlayer);

  return allPlayers2[currentPlayerIndex + 1];
}

/**
 *
 * @param {object} state
 */
export function getNextPlayer(state) {
  const { allPlayers, currentPlayer } = state;
  const allPlayers2 = allPlayers.concat(allPlayers);
  let probableNextPlayer = currentPlayer;
  while (
    (probableNextPlayer = getNextPlayer2(allPlayers2, probableNextPlayer))
  ) {
    if (probableNextPlayer === currentPlayer) {
      return false;
    }

    if (!state[probableNextPlayer].finished) {
      return probableNextPlayer;
    }
  }

  return probableNextPlayer;
}

/**
 *
 * @param {object} state
 * @param {boolean} next
 */
export function continueRolling(state, next) {
  if (next) {
    state.currentPlayer = getNextPlayer(state);
  }

  const player = state[state.currentPlayer];

  player.roll = 0;
  state.rolling = true;
}
