import React, { Component } from "react";
import img1 from "../src/assets/1.jpg";
import Home from "./Home";
import Hello from "./Hello";
import Test from "./Test";
import RouterTest from "./RouterTest";
import Hook from "./Hook";
import Hook1 from "./Hook1";
import {
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      num: 1,
    };
  }

  componentDidMount() {
    this.props.history.listen((link) => {
      console.log(link);
    });
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
        {/* <Test /> */}
        {/* <RouterTest /> */}

        {/* <Link to="/home">点我去home</Link>
        <Link to="/hello">点我去hello</Link>
        <Link
          to={{
            pathname: "/test",
            query: { name: "zc" },
          }}
        >
          点我去test
        </Link>
        <button onClick={() => this.props.history.push("/test")}>
          点我去test
        </button> */}
        {/* <Hook /> */}
        <Hook1 />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/home/:id" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/hello" exact component={Hello} />
          <Route path="/test" component={Test} />
          <Redirect from="/" to="/hello" exact></Redirect>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
