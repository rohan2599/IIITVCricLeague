import React from "react";
import "../../static/css/register.css";
import { Link } from "react-router-dom";

const ForRegistration = () => {
  return (
    <div className="container">
      <div className="button">
        <Link to="/register/owner" className="link_decoration">
          <h5>As a Owner</h5>
        </Link>
      </div>
      <div className="button">
        <Link to="/register/player" className="link_decoration">
          <h5>As a Player</h5>
        </Link>
      </div>
    </div>
  );
};

export default ForRegistration;
