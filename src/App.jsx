import fetchWeather from "./weatherApi.js";
import { useState } from "react";
import fetchLocation from "./locationApi.js";
import TodayCard from "./components/TodayCard.jsx";
import { useRef } from "react";

function App() {
  const baseRef = useRef();
  const [weather, setWeather] = useState("sunny");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("London");

  async function handleClick() {
    const coords = await fetchLocation(baseRef.current.value)
      .then((data) => data.json())
      .then((data) => {
        const result = [data[0].lat, data[0].lon];
        return result;
      });
    const weatherInfo = await fetchWeather(coords[0], coords[1]).then((data) =>
      data.json()
    );

    setTemp(Math.floor(weatherInfo.main.temp).toString() + "°C");
    setLocation(weatherInfo.name);
    setWeather(weatherInfo.weather[0].description);
    console.log(weatherInfo);
  }

  return (
    <>
      <input type="text" ref={baseRef} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        click me for weather
      </button>
      <TodayCard name={location} weather={weather} temp={temp}></TodayCard>
    </>
  );
}

export default App;
