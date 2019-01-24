import React, { Component } from "react";

class RegisterPlayer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="" />
          </div>
          <div className="form-group">
            <label htmlFor="" />
          </div>
          <div className="form-group">
            <label htmlFor="" />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPlayer;
