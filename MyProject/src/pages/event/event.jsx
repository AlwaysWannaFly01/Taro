import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";

const env_name = process.env.TARO_ENV;

export default class Event extends Component {
  state = {
    msg: "事件",
    name: "大苏打",
  };
  componentWillMount(){
    console.log(env_name);
  }

  click(param1, param2, event) {
    console.log(param1);
    console.log(param2);
    console.log(event);
    console.log(this.state.msg);
    console.log(arguments);
  }
  render() {
    return (
      <View className="index">
        <Button onClick={this.click.bind(this, this.state.name, 1)}>
          测试事件
        </Button>
        <Button
          onClick={() => {
            console.log(24546);
          }}
        >
          测试事件2
        </Button>
      </View>
    );
  }
}
