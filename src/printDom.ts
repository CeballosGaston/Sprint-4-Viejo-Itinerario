export function printJoke(container: HTMLDivElement, joke: string) {
  container!.innerHTML = joke;
}


export function printWeather (container: HTMLDivElement, temp: number){

container!.innerHTML = `Temperatura: ${temp}º`


}

