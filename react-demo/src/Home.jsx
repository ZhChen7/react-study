import React, { Component } from "react";
import PubSub from "pubsub-js";

class Home extends Component {
  pubsub() {
    PubSub.publish("evt", 1);
  }
  render() {
    return (
      <div>
        <button onClick={this.pubsub.bind(this)}>进行同级数据传递</button>
      </div>
    );
  }
}

export default Home;
