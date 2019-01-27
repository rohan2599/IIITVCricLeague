import React, { Component } from "react";
import { connect } from "react-redux";
import { SignUpOwner } from "../../store/actions/authActions";

class signUpOwner extends Component {
  state = {
    name: "",
    batch: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.SignUpOwner(this.state);
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
          <h5 style={this.styles}> Owner Registration Form</h5>
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

          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    SignUpOwner: player => dispatch(SignUpOwner(player))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(signUpOwner);
