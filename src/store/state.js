import {
  INITIAL_POSITION,
  PLAYER_A,
  PLAYER_B,
  PLAYER_C,
  PLAYER_D,
} from "./constant";

export const initialState = {
  allPlayers: "ABCD",
  currentPlayer: PLAYER_A,
  roll: 0,
  A: {
    tokens: [
      { id: 0, player: PLAYER_A, position: INITIAL_POSITION, enabled: false },
      { id: 1, player: PLAYER_A, position: INITIAL_POSITION, enabled: false },
      { id: 2, player: PLAYER_A, position: INITIAL_POSITION, enabled: false },
      { id: 3, player: PLAYER_A, position: INITIAL_POSITION, enabled: false },
    ],
  },
  B: {
    tokens: [
      { id: 0, player: PLAYER_B, position: INITIAL_POSITION, enabled: false },
      { id: 1, player: PLAYER_B, position: INITIAL_POSITION, enabled: false },
      { id: 2, player: PLAYER_B, position: INITIAL_POSITION, enabled: false },
      { id: 3, player: PLAYER_B, position: INITIAL_POSITION, enabled: false },
    ],
  },
  C: {
    tokens: [
      { id: 0, player: PLAYER_C, position: INITIAL_POSITION, enabled: false },
      { id: 1, player: PLAYER_C, position: INITIAL_POSITION, enabled: false },
      { id: 2, player: PLAYER_C, position: INITIAL_POSITION, enabled: false },
      { id: 3, player: PLAYER_C, position: INITIAL_POSITION, enabled: false },
    ],
  },
  D: {
    tokens: [
      { id: 0, player: PLAYER_D, position: INITIAL_POSITION, enabled: false },
      { id: 1, player: PLAYER_D, position: INITIAL_POSITION, enabled: false },
      { id: 2, player: PLAYER_D, position: INITIAL_POSITION, enabled: false },
      { id: 3, player: PLAYER_D, position: INITIAL_POSITION, enabled: false },
    ],
  },
};
