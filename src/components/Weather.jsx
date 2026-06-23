import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const API_KEY = "cc7fbed75d24519d4f24eb003da571d6";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div className="card">
      <h2>Weather</h2>
      <p>{weather.name}</p>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].main}</p>
    </div>
  );
}

export default Weather;