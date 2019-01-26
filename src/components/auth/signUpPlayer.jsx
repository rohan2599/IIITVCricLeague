import React, { Component } from "react";

class signUpPlayer extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    [e.target.name] = e.target.value;
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" id="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" id="name">
              Batch
            </label>
            <input
              type="text"
              name="batch"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default signUpPlayer;
