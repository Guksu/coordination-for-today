import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Gender from "./routes/Gender";
import Home from "./routes/Home";
import Pick from "./routes/Pick";
import dotenv from "dotenv";

const App: FC = () => {
  dotenv.config();
  const [gender, setGender] = useState("");
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const geoCheck = (pos: any) => {
    setLat(pos.coords.latitude);
    setLon(pos.coords.longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoCheck);
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data) => {
        setTemp(Math.ceil(data.main.temp));
      });
  });

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/gender"
          render={() => <Gender setGender={setGender} />}
        />
        <Route
          exact
          path="/pick"
          render={() => <Pick gender={gender} temp={temp} />}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
