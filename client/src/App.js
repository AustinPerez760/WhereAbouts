import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./comp/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            {/* <LogIn /> */}
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
