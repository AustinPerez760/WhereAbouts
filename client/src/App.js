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
  const [userEmail, setUserEmail] = useState("");

  // useEffect(() => {
  //   console.log("*******Top PROPS", userEmail);
  // });

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
              <Redirect to="/home" />
            ) : (
              <SignCard
                setAuth={setAuthentication}
                setUsername={setUserEmail}
              />
            )}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home username={userEmail} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
