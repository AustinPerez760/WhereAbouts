import React, { useEffect } from "react";
import { Component, useState } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import TopBar from "./comp/TopBar";
import SignCard from "./comp/SignCard";
import About from "./comp/About";
import Home from "./comp/Home";
import axios from "axios";

function App() {
  const [isAuth, setAuth] = useState(false);

  // useEffect(() => {
  //   axios.post("/api/login").then((res) => {
  //     setAuth(res.isAuth);
  //   });
  // }, [isAuth]);

  const setAuthentication = (isAuth) => {
    console.log("******", isAuth);
    setAuth(isAuth);
  };

  return (
    <Router>
      <div id="appDiv">
        <TopBar />
        <Switch>
          <Route exact path="/">
            {isAuth ? (
              <Redirect to="/about" />
            ) : (
              <SignCard setAuth={setAuthentication} />
            )}
          </Route>
          <Route exact path="/users/:id">
            {/* <Search /> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
