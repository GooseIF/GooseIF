import { useState } from "react";
import TodayCard from "./components/TodayCard.jsx";
import { useRef } from "react";

import MapComponent from "./components/openLayersMap.jsx";
import { useGeographic } from "ol/proj.js";

function App() {
  useGeographic();
  const [info, setInfo] = useState();
  const inputRef = useRef();
  const [weather, setWeather] = useState("sunny");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("London");

  async function handleClick(weatherInfo) {
    setTemp(Math.floor(weatherInfo.main.temp).toString() + "°C");
    setLocation(weatherInfo.name);
    setWeather(weatherInfo.weather[0].description);
    console.log(weatherInfo);
  }

  return (
    <>
      <TodayCard name={location} weather={weather} temp={temp}></TodayCard>

      <MapComponent info={info} setter={setInfo} onNewInfo={handleClick} />
    </>
  );
}

export default App;
