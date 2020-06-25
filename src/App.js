import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Questions from "./View/Questions/Questions";
import UploadFile from "./View/UploadFile/UploadFile";
import Landing from "./View/Landing/Landing";
import Dashboard from "./View/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              strict
              path="/"
              render={(props) => <Landing {...props} />}
            />
            <Route
              exact
              strict
              path="/questions"
              render={(props) => <Questions {...props} />}
            />
            <Route
              exact
              strict
              path="/upload"
              render={(props) => <UploadFile {...props} />}
            />
            <Route
              exact
              strict
              path="/dashboard"
              render={(props) => <Dashboard {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
