import React, { Component } from 'react';
import Starter from './index';

class Starters extends Component {
 

  render() { 
    return (
      <div>
      <button onClick={this.props.onReset} className="btn btn-primary m-2">Reset</button>
        { this.props.counters.map( counter => <Starter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />)}
      </div>
    );
  }
}
 
export default Starters;
