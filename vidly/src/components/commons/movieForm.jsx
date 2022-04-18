import React from "react";
import Joi from "joi-browser";
import Form from "./form";


import { getMovies, saveMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";




class MovieForm extends Form {
  state = {
    data: {
      _id: Date.now().toString(), 
      title: "",
      genreId: "",
      numberInStock: "",
      rate: ""
    },
    error: {},
    genres: []
  };

  schema = Joi.object({
    _id: Joi.string().optional(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).required().label("Number in Stock"),
    rate: Joi.number().min(0).max(100).required().label("Rate"),
  });
  


  // constructor({ match, history }) {
  //   super({ match, history })
  // }

  doSubmit = () => {
    console.log('new movie submitted')

    saveMovie(this.state.data)

    this.props.history.push('/movies')
  }

  render() {

  const id = this.props.match.params.id;

  const { data, error, genres } = this.state;

  return (
    <React.Fragment>
      <h1>Movie Form {id} </h1>
      <form onSubmit={this.handleSubmit}>
          {this.getInputJsx("title", "text", "Title", data.title, error.title, this.handleChange)}
          {this.getInputDropdownJsx("genreId", "Genre", data.genreId, genres, error.genreId, this.handleChange)}
          {this.getInputJsx("numberInStock", "text", "Number in Stock", data.numberInStock, error.numberInStock, this.handleChange)}
          {this.getInputJsx("rate", "text", "Rate", data.rate, error.rate, this.handleChange)}
          {this.getSubmitButtonJsx("Login")}
      </form>

    </React.Fragment>
  );
  }

  componentDidMount() {

    // mount genre
    const genreAll = getGenres();
    this.setState({genres: genreAll})


    const id = this.props.match.params.id;

    // lets return if this is a new movie
    if (id==='new') return


    const moviesAll = getMovies()
    const movie = moviesAll.filter( movie => movie._id === id )[0];

    if (!movie) {
      return this.props.history.replace('/notFound')
    }

    const data = this.modelToView(movie)
    
    this.setState({data})

  }

  modelToView (movieModel) {
    const view = { 
      _id: movieModel._id,
      title: movieModel.title,
      genreId: movieModel.genre._id,
      numberInStock: movieModel.numberInStock,
      rate: movieModel.dailyRentalRate
    };

    return view;
  }

};

export default MovieForm;
