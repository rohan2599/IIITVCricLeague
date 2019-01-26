import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = { data: {} };

  renderInput = (name, label, type = "text") => {
    const { data } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = label => {
    const { data } = this.state;
    if (data.username && data.batch)
      return <button className="btn btn-primary">{label}</button>;
    else {
      return (
        <button className="btn btn-primary" disabled>
          {label}
        </button>
      );
    }
  };
}

export default Form;
