import { currentJoke } from "./jokeState.js";

export let currentScoreJoke: 1 | 2 | 3 | null = null;

export function scoreJoke(score: 1 | 2 | 3) {
  if (!currentJoke) return;
  currentScoreJoke = score;
}

export function resetCurrentScoreJoke() {
  currentScoreJoke = null;
}
