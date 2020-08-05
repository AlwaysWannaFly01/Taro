import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";

import "./index.scss";
import { getTopicList } from "../../utils/request";
class Index extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}

    componentDidMount() {
        getTopicList().then((data)=>{
            console.log(data);
        })
    }
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return (
            <View className="index">
                <View>
                    <Text>Hello, World</Text>
                </View>
            </View>
        );
    }
}

export default Index;
