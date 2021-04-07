import React from "react";
import Home from "./pages/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Home />
      <Switch></Switch>
    </Router>
  );
}

export default App;
