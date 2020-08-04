import React, { Component } from "react";
import { View, Text, Button, Input, Textarea } from "@tarojs/components";
import "./dialog.scss";

export default class Dialog extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    addQuestion() {}
    render() {
        return <View className="dialog">{this.props.children}</View>;
    }
}
