import React, { Component } from 'react';

class Counter extends Component() {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.increment}>
          Click me
        </button>
      </div>
    )
  }
}

export default Counter;
