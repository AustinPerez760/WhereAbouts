import React from "react";
import { Component, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TopBar from "./comp/TopBar";
import SignCard from "./comp/SignCard";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <SignCard />
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
