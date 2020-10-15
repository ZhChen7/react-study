import React, { Component } from "react";
import PubSub from "pubsub-js";

class Hello extends Component {
  constructor(props) {
    super(props);
    PubSub.subscribe("evt", (msg, data) => {
      console.log(msg);
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}

export default Hello;
