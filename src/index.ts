import { callDadJoke, callChuckJoke } from "./jokes.js";
import { setCurrentJoke, currentJoke } from "./jokeState.js";
import { fetchApi } from "./apiService.js";
import { apiDadJokes } from "./config.js";
import { currentScoreJoke, scoreJoke, resetCurrentScoreJoke } from "./rating.js";
import { pushJoke } from "./pushJokes.js";
import { getWeather } from "./weather.js";

const jokesContainer = document.getElementById("jokes-container") as HTMLDivElement;
const buttonNextJoke = document.getElementById("next-joke");
const buttonScoreOne = document.getElementById("score-one");
const buttonScoreTwo = document.getElementById("score-two");
const buttonScoreThree = document.getElementById("score-three");
const weatherContainer = document.getElementById("weather-container")




buttonNextJoke?.addEventListener("click", async () => {
  const randomNumber = Math.random();
  let jokeText: string;

  if (randomNumber > 0.5) {
    const joke = await callChuckJoke();
    jokeText = joke.value;
  } else {
    const joke = await callDadJoke();
    jokeText = joke.joke;
  }
  setCurrentJoke(jokeText);
  pushJoke();
  resetCurrentScoreJoke();
  

  jokesContainer!.innerHTML = jokeText;
});


buttonScoreOne?.addEventListener("click", ()=>{scoreJoke(1)});
buttonScoreTwo?.addEventListener("click", ()=>{scoreJoke(2)});
buttonScoreThree?.addEventListener("click", ()=>{scoreJoke(3)});



navigator.geolocation.getCurrentPosition(async (position) =>{
const {latitude, longitude} = position.coords;

const weather = await getWeather(latitude, longitude);

weatherContainer!.innerHTML = `Temperatura: ${weather.current_weather.temperature}º`;

});




