import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import Head from "../../components/head/head";
class Login extends Component {
    componentWillReceiveProps(nextProps) {}

    componentWillUnmount() {}
    componentWillMount() {}
    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        return (
            <View className="login-container">
                <Head />
            </View>
        );
    }
}

export default Login;
