import { fetchApi } from "./apiService.js";
import { apiWeather } from "./config.js";

export async function getWeather(lat: number, lon: number) {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    current_weather: "true",
    temperature_unit: "celsius",
    timezone: "auto",
  }).toString();
  console.log(`${apiWeather.url}?${params}`);

  return fetchApi<{
    current_weather: { temperature: number; weathercode: number };
  }>(`${apiWeather.url}?${params}`);
}
