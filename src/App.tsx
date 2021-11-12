import React, { FC, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Pick from "./routes/Pick";
import Weather from "./routes/Weather";

const App: FC = () => {
  const [gender, setGender] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home setGender={setGender} />} />
        <Route
          exact
          path="/weather"
          render={() => <Weather gender={gender} />}
        />
        <Route exact path="/pick" render={() => <Pick />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
