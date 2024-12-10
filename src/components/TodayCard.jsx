export default function TodayCard(props) {
  return (
    <>
      <div className="today">
        <div className="location">{props.name}</div>
        <div className="weather">{props.weather}</div>
        <div className="temp">{props.temp}</div>
      </div>
    </>
  );
}
