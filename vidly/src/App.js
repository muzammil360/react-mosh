import "./App.css";

import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Movies from "./components/movies";
import Customers from "./components/commons/customers";
import Rentals from "./components/commons/rentals";
import MovieForms from "./components/commons/movieForm";
import NotFound from "./components/commons/notFound";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForms} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notFound" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect from="/*" to="/notFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
