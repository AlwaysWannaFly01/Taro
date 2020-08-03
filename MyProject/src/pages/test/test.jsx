import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
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
  componentWillMount() {
    const { onShow } = getCurrentInstance().router;
    console.log(onShow);
    const res = onShow.startsWith("/pages/test/test");
    console.log(res);
  }

  componentDidShow() {
    console.log("test页面显示时触发");
    let id = this.state.url;

    if(id){
      let el = document.getElementById(id);
      if (el) {
        el.style.display = "none";
      }
    }
  }

  handelCLick() {
    setDate();
    /* h5浏览器返回,会保存上一页面的内容 */
    let url = "/pages/index/index?name=zhangsan&age=12";
    this.setState({
      url,
    });

    Taro.navigateTo({
      url: this.state.url,
      // url: "/pages/index/index",
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
