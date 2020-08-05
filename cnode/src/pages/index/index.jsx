import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import Menu from "../../components/menu/menu";

class Index extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return (
            <View className="index">
                <Menu></Menu>
            </View>
        );
    }
}

export default Index;
