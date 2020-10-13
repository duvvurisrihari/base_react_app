import React, { Component } from "react";

import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import landingpage from "./Components/landingpage";

class App extends Component {
  state = {
    loggedIn: false,
  };


  render() {
    return (
      <div>

        <div className="App">
        <Router>
        <Switch>
          <Route path="/landingpage" component={landingpage} />
          </Switch>
          </Router>

        </div>
      </div>
    );
  }
}

export default App;
