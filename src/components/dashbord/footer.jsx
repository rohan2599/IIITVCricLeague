import React from "react";
import "../../static/css//footer.css";
import logo from "../../static/image/logo.png";

const Footer = () => {
  return (
    <div className=" footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <img src={logo} alt="logo" className="logo" />
            <p className="content">
              T10 Sports Management FZC is a Group Company of the diversified
              multinational conglomerate – Mulk Holdings, which has a presence
              in over 90 countries.
            </p>
          </div>
          <div className="col-8">
            <p>
              T10 Sports Management FZC is a Group Company of the diversified
              multinational conglomerate – Mulk Holdings, which has a presence
              in over 90 countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
