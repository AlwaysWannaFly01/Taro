import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";

class Index extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return <View className="index">detail</View>;
    }
}

export default Index;
