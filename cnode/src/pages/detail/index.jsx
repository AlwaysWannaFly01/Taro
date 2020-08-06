import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

class Index extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}
    componentWillMount() {
        let { topicId } = getCurrentInstance().router.params;
        console.log("topicId:" + topicId);
    }
    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return <View className="index">detail</View>;
    }
}

export default Index;
