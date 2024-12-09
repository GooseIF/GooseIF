const key = "5d0b38825ba9e80dee5e6947e69e6ef4"


export default function fetchWeather(lat, lon) {
const srcUrl = "https://api.openweathermap.org/data/2.5/weather?"

const url = `${srcUrl}lat=${lat}&lon=${lon}&units=metric&appid=${key}`

return fetch (url)
}
