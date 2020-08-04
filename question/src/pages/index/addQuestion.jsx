import React, { Component } from "react";
import { View, Text, Button, Input, Textarea } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./addQuestion.scss";
import Dialog from "./dialog";
import { AtIcon, AtButton } from "taro-ui";

export default class AddQuestion extends Component {
    state = {
        title: "",
        des: "",
    };
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    btnCancel() {
        this.props.onClose && this.props.onClose();
    }
    sure() {
        if (this.state.title && this.state.des) {
            //调用父层组件传递数据
            this.props.onReceiveQuestion &&
                this.props.onReceiveQuestion(this.state);
        } else {
            Taro.showToast({
                title: "请输入标题或描述",
                icon: "none",
            });
        }
    }
    changeTitle(e) {
        this.setState({ title: e.target.value });
    }
    changeDes(e) {
        this.setState({ des: e.target.value });
    }
    render() {
        return (
            <Dialog>
                <View className="addQuestion">
                    <View className="body">
                        <Input
                            placeholder="请输入标题"
                            className="que-title"
                            onInput={this.changeTitle.bind(this)}
                            focus
                        ></Input>
                        <Textarea
                            placeholder="请输入问题描述"
                            className="que-des"
                            onInput={this.changeDes.bind(this)}
                        ></Textarea>
                        <View className="btn-group">
                            <AtButton
                                className="btn-item sure"
                                onClick={this.sure.bind(this)}
                            >
                            确定
                            </AtButton>
                            <AtButton
                                className="btn-item cancel"
                                onClick={this.btnCancel.bind(this)}
                            >
                                取消
                            </AtButton>
                        </View>
                    </View>
                </View>
            </Dialog>
        );
    }
}
