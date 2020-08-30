import { Dice, Token, GameState } from './state';
import { PlayerName, MAX_POSITION } from './constant'

export function getMoveableTokens(tokens: Token[], roll: Dice): Token[] {
  return tokens.filter(({ position }) => {
    const next = position + roll;
    return next > -1 && next < 56;
  });
}

function getNextPlayer2(allPlayerNames: PlayerName[], currentPlayerName: PlayerName) {
  const allPlayers2 = allPlayerNames.concat(allPlayerNames);
  const currentPlayerIndex = allPlayerNames.indexOf(currentPlayerName);

  return allPlayers2[currentPlayerIndex + 1];
}

export function getNextPlayerName(state: GameState) {
  const { allPlayerNames, currentPlayerName } = state;
  const allPlayers2 = allPlayerNames.concat(allPlayerNames);
  let probableNextPlayer = currentPlayerName;

  while (
    (probableNextPlayer = getNextPlayer2(allPlayers2, probableNextPlayer))
  ) {
    if (probableNextPlayer === currentPlayerName) {
      return false;
    }

    const won = state[probableNextPlayer].tokens.every(
      token => token.position === MAX_POSITION
    );

    if (!won) {
      return probableNextPlayer;
    }
  }

  return probableNextPlayer;
}

export function continueRolling(state: GameState, next: boolean) {
  if (next) {
    const nextPlayerName = getNextPlayerName(state);
    if (nextPlayerName) {
      state.currentPlayerName = nextPlayerName;
    } else {
      return
    }
  }

  const player = state[state.currentPlayerName];

  player.roll = 0;
  state.rolling = true;
}
