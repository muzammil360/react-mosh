import React from "react";
import Joi from "joi-browser";
import Form from "./commons/form";


class RegisterForm extends Form {

  state = {
    data: { 
      username: "",
      password: "",
      name: ""
    },
    error: { 
      username: "",
      password: "",
      name: ""
    },
  };


  schema = Joi.object({
    username: Joi.string().email().label("Username"),
    password: Joi.string().min(5).label("Password"),
    name: Joi.string().min(3).label("Name"),
  });


  doSubmit = () => {
    console.log('user registeration request submitted')    
  }

  render() {
    const { data: account, error } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.getInputJsx("username", "email", "Username", account.username, error.username, this.handleChange)}
          {this.getInputJsx("password", "password", "Password", account.password, error.password, this.handleChange)}
          {this.getInputJsx("name", "text", "Name", account.name, error.name, this.handleChange)}
          {this.getSubmitButtonJsx("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
