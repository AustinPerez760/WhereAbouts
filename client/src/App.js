import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TopBar from "./comp/TopBar";
import LogIn from "./comp/LogIn";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/users/:id">
            {/* <Search /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
