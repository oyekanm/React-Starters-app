import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Navbr extends Component {
  render() {
    return (
      <nav className="Navbar navbar-expand-lg Navbar-light bg-light p-3">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          {/* <span className="badge badge-pill bg-secondary">
            {" "}
            {this.props.totalCounters}{" "}
          </span> */}
        </a>
      </nav>
    );
  }
}

export default Navbr;
