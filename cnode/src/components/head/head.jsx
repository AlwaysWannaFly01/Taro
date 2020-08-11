import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "react-redux";
import "./head.scss";
import loginBack from "../../assets/img/loginBack.jpg";
import head from "../../assets/img/head.png";
class Head extends Component {
    render() {
        // console.log(this.props);
        const { loginName, avatarUrl } = this.props;
        return (
            <View className="login-head">
                <Image className="login-head-back" src={loginBack} />
                <Image
                    className="login-head-head"
                    src={avatarUrl ? avatarUrl : head}
                />
                <Text className="login-head-name">
                    {loginName ? loginName : "happy"}
                </Text>
            </View>
        );
    }
}

export default Head;
