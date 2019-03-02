import React, { Component } from "react";
import logo from "../../static/image/logo_cric.png";
import "../../static/css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    width: 50
  };

  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav--left">
            <div className="cl">
              <h1>
                CRICKET <span>LEAGUE</span>
              </h1>
            </div>
            <div className="navLeft--underline" />
          </div>
          <div className="nav--logo">
            <img style={{ height: "25vh" }} src={logo} alt="Cric logo" />
          </div>

          <div className="nav--right">
            <ul className="navlink">
              <li>
                <span>Home</span>
              </li>
              <li>Fixtures</li>
              <li>Register</li>
              <li>Contact</li>
            </ul>
            <div className="navRight--underline" />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
