import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  componentDidMount() {
    this.ajaxFun();
  }

  ajaxFun = () => {
    axios.get('/api/101320101.html').then((data) => {
      console.log(data);
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Test</h1>
        </div>
      </div>
    );
  }
}

export default Test;
