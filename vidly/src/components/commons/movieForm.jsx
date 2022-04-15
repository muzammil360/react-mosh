import React from "react";
import Joi from "joi-browser";
import Form from "./form";


class MovieForm extends Form {
  state = {
    data: { 
      title: "",
      genre: ['a','b','c'],
      numberInStock: "",
      rate: ""
    },
    error: {}
  };

  schema = Joi.object({
    title: Joi.string().label("Title"),
    genre: Joi.string().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).label("Number in Stock"),
    rate: Joi.number().min(0).max(100).label("Rate"),
  });

  // constructor({ match, history }) {
  //   super({ match, history })
  // }

  doSubmit = () => {
    console.log('new movie submitted')
    this.props.history.push('/movies')
  }

  render() {
  const id = this.props.match.params.id;

  const { data, error } = this.state;

  console.log("genre data", this.state.data.genre)

  return (
    <React.Fragment>
      <h1>Movie Form {id} </h1>
      <form onSubmit={this.handleSubmit}>
          {this.getInputJsx("title", "text", "Title", data.title, error.title, this.handleChange)}
          {this.getInputDropdownJsx("genre", "Genre", data.genre, error.genre, this.handleChange)}
          {this.getInputJsx("numberInStock", "text", "Number in Stock", data.numberInStock, error.numberInStock, this.handleChange)}
          {this.getInputJsx("rate", "text", "Rate", data.rate, error.rate, this.handleChange)}
          {this.getSubmitButtonJsx("Login")}
      </form>

    </React.Fragment>
  );
  }
};

export default MovieForm;
