import { Dice } from "../store/state";

export function roll(): Dice {
  const outcome = Math.round(Math.random() * 7);
  return outcome === 0 || outcome === 7 ? roll() : outcome;
}
