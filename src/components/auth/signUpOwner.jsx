import React, { Component } from "react";
// import Form from "./form";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class signUpOwner extends Component {
  state = {
    data: { email: "", password: "", batch: "" }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };

    data[input.name] = input.value;
    this.setState({
      data
    });
  };

  handlefbStore = ({ data }) => {
    signUp(data);
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              onChange={this.handleChange}
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.handleChange}
              id="password"
              name="password"
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
          <button className="btn btn-primary" onClick={this.handlefbStore}>
            Register
          </button>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signUpOwner);
