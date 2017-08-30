import React, { Component } from "react";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    const firstCount = props.initialCount
    this.state = {
      count: firstCount
    };
  }
  onClick(type) {
    this.setState({
      count: type == "+" ? this.state.count + 1 : this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <div style={{ margin: "15px" }} />
        <input
          type="button"
          onClick={this.onClick.bind(this, "+")}
          value="Increment"
        />
        <input
          type="button"
          onClick={this.onClick.bind(this, "-")}
          value="Decrement"
        />
      </div>
    );
  }
}
export default CounterContainer;
