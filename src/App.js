import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/dashbord/Home";
import "./App.css";
import ForRegistration from "./components/auth/forRegistration";
import signUpOwner from "./components/auth/signUpOwner";
import signUpPlayer from "./components/auth/signUpPlayer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={ForRegistration} />
          <Route exact path="/register/owner" component={signUpOwner} />
          <Route exact path="/register/player" component={signUpPlayer} />
          {/* <Route exact path="/status" component={Stats} /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
