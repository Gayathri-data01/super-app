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
    <div style={cardStyle}>
      <h2>Weather</h2>
      <h3>{weather.name}</h3>
      <p style={{ fontSize: "32px", margin: 0 }}>
        {weather.main.temp}°C
      </p>
      <p>{weather.weather[0].main}</p>
    </div>
  );
}

const cardStyle = {
  background: "#1f1f1f",
  padding: "20px",
  borderRadius: "20px",
  color: "white",
};

export default Weather;