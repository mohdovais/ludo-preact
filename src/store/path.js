import {
  PLAYER_D,
  PLAYER_C,
  PLAYER_B,
  PLAYER_A,
  MAX_POSITION,
} from "./constant";

/**
 *
 * @param {array} array
 * @returns {array}
 */
const createPath = (array) =>
  Object.freeze(
    array.map((step) => {
      step.tokens = [];
      Object.freeze(step);
      return step;
    })
  );

/**
 *
 * @param {array} array
 * @param {number} start
 * @param {array} additional
 * @returns {array}
 */
const createPlayerPath = (array, start, additional) => {
  return Object.freeze(
    array.slice(start, start + MAX_POSITION).concat(additional)
  );
};

export const path = (function () {
  const COMMON_PATH = createPath([
    { x: 6, y: 13, star: true },
    { x: 6, y: 12 },
    { x: 6, y: 11 },
    { x: 6, y: 10 },
    { x: 6, y: 9 },
    { x: 5, y: 8 },
    { x: 4, y: 8 },
    { x: 3, y: 8 },
    { x: 2, y: 8, star: true },
    { x: 1, y: 8 },
    { x: 0, y: 8 },
    { x: 0, y: 7 },
    { x: 0, y: 6 },
    { x: 1, y: 6, star: true },
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 6, y: 5 },
    { x: 6, y: 4 },
    { x: 6, y: 3 },
    { x: 6, y: 2, star: true },
    { x: 6, y: 1 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 0 },
    { x: 8, y: 1, star: true },
    { x: 8, y: 2 },
    { x: 8, y: 3 },
    { x: 8, y: 4 },
    { x: 8, y: 5 },
    { x: 9, y: 6 },
    { x: 10, y: 6 },
    { x: 11, y: 6 },
    { x: 12, y: 6, star: true },
    { x: 13, y: 6 },
    { x: 14, y: 6 },
    { x: 14, y: 7 },
    { x: 14, y: 8 },
    { x: 13, y: 8, star: true },
    { x: 12, y: 8 },
    { x: 11, y: 8 },
    { x: 10, y: 8 },
    { x: 9, y: 8 },
    { x: 8, y: 9 },
    { x: 8, y: 10 },
    { x: 8, y: 11 },
    { x: 8, y: 12, star: true },
    { x: 8, y: 13 },
    { x: 8, y: 14 },
    { x: 7, y: 14 },
    { x: 6, y: 14 },
  ]);

  const A_IN = createPath([
    { x: 7, y: 13 },
    { x: 7, y: 12 },
    { x: 7, y: 11 },
    { x: 7, y: 10 },
    { x: 7, y: 9 },
  ]);

  const B_IN = createPath([
    { x: 1, y: 7 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
  ]);

  const C_IN = createPath([
    { x: 7, y: 1 },
    { x: 7, y: 2 },
    { x: 7, y: 3 },
    { x: 7, y: 4 },
    { x: 7, y: 5 },
  ]);

  const D_IN = createPath([
    { x: 13, y: 7 },
    { x: 12, y: 7 },
    { x: 11, y: 7 },
    { x: 10, y: 7 },
    { x: 9, y: 7 },
  ]);
  
  const PATH = COMMON_PATH.concat(COMMON_PATH);
  const players = {};

  players[PLAYER_A] = createPlayerPath(PATH, 0, A_IN);
  players[PLAYER_B] = createPlayerPath(PATH, 13, B_IN);
  players[PLAYER_C] = createPlayerPath(PATH, 26, C_IN);
  players[PLAYER_D] = createPlayerPath(PATH, 39, D_IN);

  return players;
})();
