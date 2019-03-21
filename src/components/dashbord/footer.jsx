import React from "react";
import "../../static/css//footer.css";
import logo from "../../static/image/logo_cric.png";

const Footer = () => {
  return (
    <footer class="page-footer font-small unique-color-dark footer">
      <div className="social">
        <div class="row py-4 d-flex align-items-center">
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0">Get connected with us on social networks!</h6>
          </div>
          <div class="col-md-4 col-lg-5 text-center mb-1">
            <a class="fb-ic">
              <i class="fa fa-facebook-f mr-4"> </i>
            </a>
            <a class="tw-ic">
              <i class="fa fa-twitter mr-4"> </i>
            </a>
            <a class="gplus-ic">
              <i class="fa fa-google-plus mr-4"> </i>
            </a>
            <a class="ins-ic">
              <i class="fa fa-instagram"> </i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer--main">
        <div class="container text-center text-md-left mt-1 ">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img className="footer--logo" src={logo} alt="Logo" />
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Components</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">About</a>
              </p>
              <p>
                <a href="#!">Register</a>
              </p>
              <p>
                <a href="#!">Login</a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Home</a>
              </p>
              <p>
                <a href="#!">Teams</a>
              </p>
              <p>
                <a href="#!">Fixtures</a>
              </p>
              <p>
                <a href="#!">Contacts</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i class="fa fa-home mr-3" /> PDPU High Rise Hostel
              </p>
              <p>
                <i class="fa fa-envelope mr-3" /> cricleague@iiitvadodara.ac.in
              </p>
              <p>
                <i class="fa fa-phone mr-3" /> +91 9119637832
              </p>
              <p>
                <i class="fa fa-print mr-3" /> +91 9119637832
              </p>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2018 Copyright: Shubham Singh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
