import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

class Child extends Component {
  componentWillReceiveProps(nextProps) {
    //会在父组件传递给子组件的参数发生改变时触发
    console.log("props属性变化了:" + nextProps.name);
  }
  cl() {
    this.props.test();
  }
  render() {
    let { name } = this.props;
    return <View onClick={this.cl.bind(this)}>我是子节点{name}</View>;
  }
}

export default Child;
