import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.less";
import Child from "./child";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页~",
  };

  state = {
    name: "Hello World!",
    text: "张三",
    age: 10,
  };
  componentWillMount() {
    console.log("第一次渲染之前执行,执行一次");

    /* 在跳转成功的目标页的生命周期方法里就能通过 getCurrentInstance().router.params , 获取到传入的参数 */
    let { name, age } = getCurrentInstance().router.params;
    console.log("name:" + name + ",age:" + age);
  }

  componentDidMount() {
    console.log("第一次渲染之后执行,执行一次");
    this.setState(
      {
        name: "Hello China~",
        text: "李四~",
        age: 23,
      },
      () => {
        console.log(this.state.name + "---" + this.state.text);
      }
    );
    // console.log(this.state.name + "---" + this.state.text); // taro的state更新是异步的
  }

  componentWillUnmount() {
    console.log("卸载时执行,执行一次");
  }

  componentWillUpdate() {
    console.log("state数据将要更新");
  }
  componentDidUpdate() {
    console.log("state数据更新后");
  }
  shouldComponentUpdate(nextProps, nextState) {
    //检查此次setState是否要进行render调用;
    //一般用来多次的setState调用时 ,提升render的性能
    if (nextState.text == "李四~") {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps(nextProps) {
    //会在父组件传递给子组件的参数发生改变时触发
  }
  componentDidShow() {
    //在reactjs不存在, 在taro中存在
    console.log("页面显示时触发");
  }

  // componentDidHide() {
  //   console.log("页面隐藏时触发");
  // }

  getName() {
    return "123";
  }
  test() {
    console.log("test父组件传递参数给子组件");
  }

  render() {
    let { name } = this.state;
    let obj = {};
    return (
      <View className="index">
        <Text>{this.getName()}</Text>
        <View>{this.state.name}</View>
        <View>{this.state.text}</View>
        <View>{this.state.age}</View>
        <Child name={name} test={this.test}></Child>
      </View>
    );
  }
}
