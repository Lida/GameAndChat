import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./Pages/Game";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:game/:room" children={<Game />} />
        </Switch>
      </Router>
    </div>
  );
}
