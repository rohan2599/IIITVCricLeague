import React, { Component } from "react";
import logo from "../../static/image/logo_cric.png";
import "../../static/css/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggleNavbar;

    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById("navbar").style.top = "0";
          document.getElementById("navbar").style.backgroundColor = "black";
          document.getElementById("navbar").style.zIndex = "1000";
        } else {
          document.getElementById("navbar").style.top = "-8.0rem"; // adjustable based your need
          document.getElementById("logo").style.maxWidth = "46%";
          document.getElementById("logo").style.marginTop = "-10px";
        }
        prevScrollpos = currentScrollPos;
        if (prevScrollpos === 0) {
          document.getElementById("logo").style.maxWidth = "100%";
          document.getElementById("navbar").style.backgroundColor =
            "transparent";
        }
      };
    }
  }

  render() {
    return (
      <div>
        <div id="navbar" className="nav">
          <div className="nav--left">
            <div className="cl">
              <h1>
                CRICKET <span>LEAGUE</span>
              </h1>
            </div>
            <div className="navLeft--underline" />
          </div>
          <div className="nav--logo">
            <img className="cric--logo" id="logo" src={logo} alt="Cric logo" />
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
