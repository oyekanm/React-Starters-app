import React, { Component } from "react";

class Starter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.classes()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  classes() {
    // let myClass = "badge  m-2 badge-"
    let myClass = "badge  m-2 bg-";
    myClass += this.props.counter.value === 0 ? "warning" : "primary";
    return myClass;
  }
}

export default Starter;
