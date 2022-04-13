import React, { Component } from "react";
class Navbar extends React.Component {

  constructor() {
    super()
    console.log('navbar - constructor()')
  }

  render() {
    return (
      <React.Fragment>
        {console.log('navbar.js - render()')}
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="http://google.com">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log('navbar - componentDidMount()')
  }
}

export default Navbar;
