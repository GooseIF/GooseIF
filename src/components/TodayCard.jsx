export default function TodayCard(props) {
  
  return (
    <>
      <div className="weatherContainer">
        <section className="header container-row">
          <div className="">{props.city}</div>
          <div className="">{props.time}</div>
        </section>
        <section className="weather">
          <div className="about_weather">
            <img src={props.icon} className="image"></img>
            <div className="description">{props.weather}</div>
          </div>

          <div className="temp">
            <div className="current">{props.temp}</div>
            <div className="feelsLike"> feels like {props.realFeel}</div>
          </div>
        </section>
        <section className="wind&humidity">
          <div className="wind container-row">
            <div className="">
              <h4>wind</h4>
              <h4>gusts</h4>
              <h4>humidity</h4>
            </div>
            <div>
              <p className="wind-info">{props.wind}</p>
              <p className="wind-info">{props.gusts}</p>
              <p className="wind-info">{props.humidity}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
