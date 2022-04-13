import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super()
    console.log('app - constructor()')
  }

  onIncrement = (counter) => {
    const index = this.state.counters.indexOf(counter);
    let countersCopy = [...this.state.counters];
    countersCopy[index].value++;

    this.setState({ counters: countersCopy });
  };

  onDecrement  = (counter) => {
    const index = this.state.counters.indexOf(counter);
    let countersCopy = [...this.state.counters];
    countersCopy[index].value--;

    this.setState({ counters: countersCopy });
  };

  onDelete = (id) => {
    const counters = this.state.counters.filter((item) => id !== item.id);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        {console.log('App.js - render()')}
        <Navbar totalCounters={this.state.counters.filter(item => item.value>0).length} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log('app - componentDidMount()')
  }
}

export default App;
