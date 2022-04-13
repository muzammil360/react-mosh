import React from "react";
import Joi from "joi-browser";
import Input from "./commons/input";

class LoginForm extends React.Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    error: {
      username: "",
      password: "",
    },
  };

  schema = Joi.object({
    username: Joi.string().email().label("Username"),
    password: Joi.string().min(5).label("Password"),
  });

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;

    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleLogin = (e) => {

    const opts = { abortEarly: false };
    const { error: JoiError } = this.schema.validate(this.state.account, opts);

    var error = {};
    if (JoiError) {
      JoiError.details.forEach((e) => {
        error[e.path[0]] = e.message;
      });
    }

    this.setState({error})
  };

  render() {
    const { account, error } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <Input
            id="username"
            type="email"
            label="Username"
            value={account.username}
            error={error.username}
            onChange={this.handleChange}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            value={account.password}
            error={error.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary" onClick={this.handleLogin}>
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
