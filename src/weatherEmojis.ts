export const weatherCodeToEmoji: Record<number, string> = {
  // ☀️ Cielo despejado / nubes
  0: "☀️",   // Clear sky
  1: "🌤️",  // Mainly clear
  2: "⛅",   // Partly cloudy
  3: "☁️",   // Overcast

  // 🌫️ Niebla
  45: "🌫️",  // Fog
  48: "🌫️",  // Depositing rime fog

  // 🌦️ Llovizna
  51: "🌦️", // Drizzle light
  53: "🌦️", // Drizzle moderate
  55: "🌧️", // Drizzle dense
  56: "🌧️❄️", // Freezing drizzle light
  57: "🌧️❄️", // Freezing drizzle dense

  // 🌧️ Lluvia
  61: "🌦️", // Rain slight
  63: "🌧️", // Rain moderate
  65: "🌧️💦", // Rain heavy
  66: "🌧️❄️", // Freezing rain light
  67: "🌧️❄️", // Freezing rain heavy

  // ❄️ Nieve
  71: "🌨️", // Snow fall slight
  73: "❄️", // Snow fall moderate
  75: "❄️❄️", // Snow fall heavy
  77: "🌨️", // Snow grains

  // 🌦️ Chubascos
  80: "🌦️", // Rain showers slight
  81: "🌧️", // Rain showers moderate
  82: "⛈️", // Rain showers violent

  // 🌨️ Chaparrones de nieve
  85: "🌨️", // Snow showers slight
  86: "❄️🌨️", // Snow showers heavy

  // ⛈️ Tormentas
  95: "⛈️", // Thunderstorm slight/moderate
  96: "⛈️🧊", // Thunderstorm with slight hail
  99: "⛈️🧊🧊", // Thunderstorm with heavy hail
};
