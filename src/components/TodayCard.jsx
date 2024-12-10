export default function TodayCard(props) {
  




  return (
    <>
        <div className="weatherContainer">
    <section className="header container-row">
        <div className="">{props.city}</div>
        <div className="">{props.time}</div>
    </section>
    <section className="weather container-row">
        <div>
        <img src={props.icon} className="image"></img>
        <div>{props.weather}</div>
    </div>

    <div className="temp container-column">
        <div className="current">{props.temp}</div>
        <div className="feelsLike"> feels like {props.realFeel}</div>
    </div>
    </section>
    <section className="wind&humidity">
        <div className="wind container-row">
            <div className="">
                <h4>Wind</h4>
                <h4>Gusts</h4>
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
