import React, { Component } from "react";
import { connect } from "react-redux";
import { SignUpPlayer } from "../../store/actions/authActions";

class signUpOwner extends Component {
  state = {
    name: "",
    batch: "",
    rank: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.SignUpPlayer(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  styles = {
    color: "grey",
    textAlign: "center"
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 style={this.styles}> Player Registration Form</h5>
          <div className="form-group">
            <label htmlFor="name">Player Name</label>
            <input
              type="name"
              onChange={this.handleChange}
              id="name"
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              onChange={this.handleChange}
              id="batch"
              name="batch"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rank">Rank</label>
            <input
              type="rank"
              onChange={this.handleChange}
              id="rank"
              name="rank"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SignUpPlayer: player => dispatch(SignUpPlayer(player))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(signUpOwner);
