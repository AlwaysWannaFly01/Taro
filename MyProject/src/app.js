import React, { Component } from "react";
import "./app.less";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return this.props.children; // this.props.children 是将要会渲染的页面
  }
}

export default App;
