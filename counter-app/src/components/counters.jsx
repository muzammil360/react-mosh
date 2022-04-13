import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {

  constructor() {
    super()
    console.log('counters - constructor()')
  }

  render() {
    return (
      <div>
        {console.log('counters.js - render()')}
        {this.props.counters.map((item) => {
          return (
            <Counter
              key={item.id}
              counter={item}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log('counters - componentDidMount()')
  }
}

export default Counters;
