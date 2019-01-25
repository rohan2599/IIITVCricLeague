import React, { Component } from "react";
import Navbar from "./components/dashbord/Navbar";
import { Route } from "react-router-dom";
import Home from "./components/dashbord/Home";
import "./App.css";
import ForRegistration from "./components/registration/forRegistration";
import RegisterOwner from "./components/registration/registerOwner";
import RegisterPlayer from "./components/registration/registerPlayer";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={ForRegistration} />
          <Route exact path="/register/owner" component={RegisterOwner} />
          <Route exact path="/register/player" component={RegisterPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
