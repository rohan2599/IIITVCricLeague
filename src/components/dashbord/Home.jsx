import React, { Component } from "react";
import "../../static/css/home.css";
import image from "../../static/image/frontpageimage.png";
import Navbar from "./Navbar";
import About from "../about/about";
import Teams from "../team/teams";
import Stats from "../stats/stats";
import Pointtable from "../stats/pointtable";

class Home extends Component {
  render() {
    return (
      <div className="ContDiv">
        <div className="header">
          <Navbar />
        </div>
        <div className="homepage">
          <img className="frontpageimage" src={image} alt="Cricketer" />
          <p className="flc">
            FIRST LOVE{" "}
            <span>
              CRICKET <button className="register--button">Register</button>
            </span>
          </p>
        </div>
        <div className="about">
          <About />
        </div>
        <div className="team--details">
          <Teams />
        </div>
        <div className="stats">
          <Stats />
        </div>
        <div className="pointtable">
          <Pointtable />
        </div>
      </div>
    );
  }
}

export default Home;
