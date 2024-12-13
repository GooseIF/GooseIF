const key = "key";

export default function fetchWeather(lon, lat) {
  const srcUrl = "https://api.openweathermap.org/data/2.5/weather?";

  const url = `${srcUrl}lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

  return fetch(url);
}
