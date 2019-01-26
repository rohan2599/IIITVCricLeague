import React, { Component } from "react";
import coverPhoto from "../../static/image/home_cover.jpg";
import "../../static/css/home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={coverPhoto} alt="Pic" className="coverPhoto" />
        <p>Home</p>
      </React.Fragment>
    );
  }
}

export default Home;
