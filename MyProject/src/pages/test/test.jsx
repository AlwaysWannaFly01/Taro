import React, { Component } from "react";
import Taro, { requirePlugin } from "@tarojs/taro";
import { View, Text, Button, Image } from "@tarojs/components";
import { setDate, getDate } from "../../utils";
import namedPng from "../../image/1.jpg";
import "./test.less";
export default class Test extends Component {
  config = {
    navigationBarTitleText: "测试页面~",
  };
  state = {
    list: [
      {
        id: 1,
        name: "项目1",
      },
      {
        id: 2,
        name: "项目2",
      },
      {
        id: 3,
        name: "项目3",
      },
      {
        id: 4,
        name: "项目4",
      },
    ],
  };
  handelCLick() {
    setDate();
    /* h5浏览器返回,会保存上一页面的内容 */
    Taro.navigateTo({
      url: "/pages/index/index?name=zhangsan&age=12",
    }).then(() => {});
  }

  render() {
    let dom = null;
    dom = !true || <Button onClick={this.handelCLick.bind(this)}>跳转</Button>;
    let { list } = this.state;
    return (
      <View className="index">
        <Image src={namedPng} className="img" />
        {dom}
        {list.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>
            );
          }
        })}
      </View>
    );
  }
}
