import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";

ReactDOM.render(
  <React.StrictMode>
    <Router exact path="/login">
      <Login />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
