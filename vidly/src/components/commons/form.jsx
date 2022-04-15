import React, { Component } from "react";
import Input from "./input";
import InputDropdown from "./inputDropdown";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const opts = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, opts);

    return error;
  };

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.id] = e.currentTarget.value;

    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const joiError = this.validate();

    let error = {};
    if (joiError) {
      joiError.details.forEach((e) => {
        error[e.path[0]] = e.message;
      });
    }
    this.setState({ error });

    if (Object.keys(error).length !== 0) return;

    this.doSubmit();
  };

  getSubmitButtonJsx(title) {
    return (
      <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>
        {title}
      </button>
    );
  }

  getInputJsx(id, type, label, value, error, onChange) {
    return (
      <Input
        id={id}
        type={type}
        label={label}
        value={value}
        error={error}
        onChange={onChange}
      />
    );
  }

  getInputDropdownJsx(id, label, value, error, onChange) {
    return (
      <InputDropdown
        id={id}
        label={label}
        value={value}
        error={error}
        onChange={onchange}
      ></InputDropdown>
    );
  }
}

export default Form;
