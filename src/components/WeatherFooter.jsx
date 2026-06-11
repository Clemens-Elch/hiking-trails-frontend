import { useEffect, useState } from "react";

export default function WeatherFooter() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws-weather");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setWeather(data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!weather) {
    return <footer className="mt-4 border-top p-2 text-center">Waiting for weather...</footer>;
  }

  let icon = "☀️";

  if (weather.category === "cloudy") {
    icon = "☁️";
  }

  if (weather.category === "rainy") {
    icon = "🌧️";
  }

  return (
    <footer className="mt-4 border-top p-2 text-center">
      {icon} Weather: {weather.category}, {weather.temperature} °C
    </footer>
  );
}