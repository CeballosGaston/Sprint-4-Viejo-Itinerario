import { currentJoke } from "./jokeState.js";
import { reportAcudits } from "./jokesData.js";
import { currentScoreJoke } from "./rating.js";

export function pushJoke() {
  if (!currentJoke) return;

  reportAcudits.push({
    joke: currentJoke,
    score: currentScoreJoke,
    date: new Date().toISOString(),
  });
  console.log(reportAcudits);
}
