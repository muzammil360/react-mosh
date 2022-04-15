import React from "react";
import Joi from "joi-browser";
import Form from "./commons/form";


class LoginForm extends Form {

  state = {
    data: { 
      username: "",
      password: ""
    },
    error: { 
      username: "",
      password: ""
    },
  };

  schema = Joi.object({
    username: Joi.string().email().label("Username"),
    password: Joi.string().min(5).label("Password"),
  });


  doSubmit = () => {
    console.log('login request submitted')
  }

  render() {
    const { data: account, error } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.getInputJsx("username", "email", "Username", account.username, error.username, this.handleChange)}
          {this.getInputJsx("password", "password", "Password", account.password, error.password, this.handleChange)}
          {this.getSubmitButtonJsx("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
