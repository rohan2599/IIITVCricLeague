import React from "react";
import "../../static/css//footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="page-footer font-small unique-color-dark footer">
      <div className="social">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0">Get connected with us on social networks!</h6>
          </div>
          <div className="col-md-6 col-lg-5 text-center mb-1">
            <Link to="#" className="fb-ic icon">
              <i className="fa fa-facebook-f mr-4"> </i>
            </Link>
            <Link to="#" className="tw-ic icon">
              <i className="fa fa-twitter mr-4"> </i>
            </Link>
            <Link to="#" className="gplus-ic icon">
              <i className="fa fa-google-plus mr-4"> </i>
            </Link>
            <Link to="#" className="ins-ic icon">
              <i className="fa fa-instagram"> </i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer--main">
        <div className="container text-center text-md-left mt-1 ">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 col-sm-3 col-5 mx-auto mb-4">
              <img
                className="footer--logo"
                src={require("../../static/image/logo_cric.png")}
                alt="Logo"
              />
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 col-sm-3 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold link--heading">
                Useful links
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link to="#" className="link">
                  Register
                </Link>
              </p>
              <p>
                <Link to="#" className="link">
                  Teams
                </Link>
              </p>
              <p>
                <Link to="#" className="link">
                  Fixtures
                </Link>
              </p>
              <p>
                <Link to="#" className="link">
                  About
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 col-sm-5 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold link--heading">
                Contact
              </h6>
              <hr
                className="accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p className="contact--detail">
                <i className="fa fa-home mr-3" /> PDPU High Rise Hostel
              </p>
              <p className="contact--detail">
                <i className="fa fa-envelope mr-3" /> cricleague@iiitv.ac.in
              </p>
              <p className="contact--detail">
                <i className="fa fa-phone mr-3" /> +91 9119637832
              </p>
              <p className="contact--detail">
                <i className="fa fa-print mr-3" /> +91 9119637832
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright: Shubham Singh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
