import React, { Component } from "react";
import img1 from "../src/assets/1.jpg";
import Home from "./Home";
import Hello from "./Hello";
import Test from "./Test";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 1,
    };
  }

  onClickHandle = (props) => {
    console.log(props);
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    return (
      <div>
        {/* <Home msg={this.state.num} onClickHandle={this.onClickHandle} /> */}
        {/* <Hello /> */}
        <Test />
      </div>
    );
  }
}

export default App;
