


import { apiDadJokes, apiChuckJokes } from "./config.js";
import { fetchApi } from "./apiService.js";



export async function callDadJoke() {
  const joke = await fetchApi<{ joke: string }>(
    apiDadJokes.url,
    apiDadJokes.headers,
  );

 return joke

  
}



export async function callChuckJoke() {
  const joke = await fetchApi<{ value: string }>(
    apiChuckJokes.url,
    apiChuckJokes.headers,
  );
  return joke;
  
}


