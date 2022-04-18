import React from "react";
import { Link } from "react-router-dom";

import _ from "lodash";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./commons/pagination";
import ListGroup from "./commons/listGroup";
import SearchBox from "./commons/searchBox";
import { paginate } from "../utils/paginate";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: null,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);

    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectedGenre = (genre) => {
    this.setState({ searchQuery: "", currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: null, currentPage: 1 });
  };

  handleNewMoviesClick = () => {
    console.log("new movie clicked");
  };

  getMovies = () => {
    const { movies, currentPage, pageSize } = this.state;
    const { currentGenre, searchQuery } = this.state;
    const { sortColumn } = this.state;

    // filter movies as per genre
    let filteredMovies =
      currentGenre && currentGenre !== "All"
        ? movies.filter((m) => m.genre.name === currentGenre)
        : movies;

    filteredMovies = searchQuery
      ? filteredMovies.filter((m) => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
      : filteredMovies;
    const filteredMoviesCount = filteredMovies.length;

    // sort movies as per order
    const sortedMovies = _.orderBy(
      filteredMovies,
      sortColumn.path,
      sortColumn.order
    );

    // paginate movies
    const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);

    return { data: paginatedMovies, count: filteredMoviesCount };
  };

  render() {
    if (this.state.movies.length === 0) {
      return <p>There are no movies in the database</p>;
    }

    const { genres, currentGenre, sortColumn, searchQuery } = this.state;

    const { data: movies, count: movieCount } = this.getMovies();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres.map((genre) => genre.name)}
              selectedItem={currentGenre}
              onItemSelect={this.handleSelectedGenre}
            />
          </div>
          <div className="col">
            <Link
              className="btn btn-primary"
              to="/movies/new"
              style={{ marginBottom: 20 }}
            >
              {" "}
              {"New Movie"}{" "}
            </Link>
            <p>{movieCount} movies found</p>
            <SearchBox query={searchQuery} onChange={this.handleSearch} />
            <div>
              <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
            </div>
            <Pagination
              itemsCount={movieCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
