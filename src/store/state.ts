import {
  INITIAL_POSITION,
  PlayerName
} from "./constant";

export enum Dice {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX
}

export interface Token {
  readonly id: number,
  readonly player: PlayerName
  position: number
  enabled: boolean
  x: number
  y: number
}

export interface Player {
  roll: Dice
  tokens: Token[]
}

export interface GameState {
  allPlayerNames: PlayerName[]
  currentPlayerName: PlayerName
  winners: PlayerName[]
  rolling: boolean
  A: Player
  B: Player
  C: Player
  D: Player
}

function createTokens(player: PlayerName): Token[] {
  return [0, 1, 2, 3].map((id) => ({
    id,
    player,
    position: INITIAL_POSITION,
    enabled: false,
    x: -1,
    y: -1,
  }))
}

export const initialState: GameState = {
  allPlayerNames: [PlayerName.A, PlayerName.B, PlayerName.C, PlayerName.D],
  currentPlayerName: PlayerName.A,
  winners: [],
  rolling: true,
  A: {
    roll: Dice.ZERO,
    tokens: createTokens(PlayerName.A),
  },
  B: {
    roll: Dice.ZERO,
    tokens: createTokens(PlayerName.B),
  },
  C: {
    roll: Dice.ZERO,
    tokens: createTokens(PlayerName.C),
  },
  D: {
    roll: Dice.ZERO,
    tokens: createTokens(PlayerName.D),
  },
};
