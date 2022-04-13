import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    console.log("counter - constructor()");
  }

  render() {
    return (
      <div className="row">
        {console.log("counter.js - render()")}
        <div className="col-1">
          <span className="badge badge-primary">{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="button button-secondary button-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="button button-secondary button-sm"
            disabled= {this.props.counter.value===0? 'disabled': ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
          <br></br>
        </div>
      </div>
    );
  }

  formatCount() {
    const x = this.props.counter.value;
    return x > 0 ? x : "zero";
  }
  componentDidMount() {
    console.log("counter - componentDidMount()");
  }
}

export default Counter;
