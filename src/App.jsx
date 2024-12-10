import { useState } from "react";
import TodayCard from "./components/TodayCard.jsx";
import "./components/component-styles/card.css";
import icons from "./icons.js";
import MapComponent from "./components/openLayersMap.jsx";
import { useGeographic } from "ol/proj.js";

function App() {
  useGeographic();
  const [info, setInfo] = useState();
  const [weather, setWeather] = useState("sunny");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("London");
  const [wind, setWind] = useState(3);
  const [gusts, setGusts] = useState(5);
  const [humidity, setHumidity] = useState(92);
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(30);
  const [iconKey, setKey] = useState("02d");
  const [feels, setFeels] = useState(10);

  async function handleClick(weatherInfo) {
    setTemp(Math.floor(weatherInfo.main.temp));
    setLocation(weatherInfo.name);
    setWeather(weatherInfo.weather[0].description);
    setWind(weatherInfo.wind.speed);
    setHumidity(weatherInfo.main.humidity);
    if (weatherInfo.wind.gust) {
      setGusts(weatherInfo.wind.gust);
    } else {
      setGusts(weatherInfo.wind.speed);
    }
    let date = new Date(weatherInfo.dt * 1000);
    setHours(
      date.getHours() +
        date.getTimezoneOffset() / 60 +
        weatherInfo.timezone / 3600
    );
    setMinutes(date.getMinutes());
    setKey(weatherInfo.weather[0].icon);
    setFeels(Math.floor(weatherInfo.main.feels_like));
  }

  return (
    <>
      <TodayCard
        city={location}
        time={hours.toString() + ":" + minutes.toString()}
        icon={icons[iconKey]}
        weather={weather}
        temp={temp + "°C"}
        realFeel={feels + "°C"}
        wind={wind + "m/s"}
        gusts={gusts + "m/s"}
        humidity={humidity + "%"}
      />
      <MapComponent info={info} setter={setInfo} onNewInfo={handleClick} />
    </>
  );
}

export default App;
