import {
  INITIAL_POSITION,
  PLAYER_A,
  PLAYER_B,
  PLAYER_C,
  PLAYER_D,
} from "./constant";

const createTokens = (player) =>
  [0, 1, 2, 3].map((id) => ({
    id,
    player,
    position: INITIAL_POSITION,
    enabled: false,
    x: -1,
    y: -1,
  }));

export const initialState = {
  allPlayers: [PLAYER_A, PLAYER_B, PLAYER_C, PLAYER_D],
  winners: [],
  currentPlayer: PLAYER_A,
  rolling: true,
  A: {
    roll: 0,
    tokens: createTokens(PLAYER_A),
  },
  B: {
    roll: 0,
    tokens: createTokens(PLAYER_B),
  },
  C: {
    roll: 0,
    tokens: createTokens(PLAYER_C),
  },
  D: {
    roll: 0,
    tokens: createTokens(PLAYER_D),
  },
};
