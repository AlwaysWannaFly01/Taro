import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

class Index extends Component {
    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() {}
    componentWillMount() {
    }
    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return <View className="index">user</View>;
    }
}

export default Index;
