export function printJoke(container: HTMLDivElement, joke: string) {
  container!.innerHTML = joke;
}


export function printWeather (container: HTMLDivElement, temp: number, icon: string | undefined){

container!.innerHTML = `${icon} Temperatura: ${temp}º`


}

