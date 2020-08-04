import React, { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import AddQuestion from "./addQuestion";

export default class Index extends Component {
    state = {
        showQuestionModal: false,
        questionList: [],
    };
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    addQuestion() {
        this.setState({
            showQuestionModal: true,
        });
    }
    closeQuestion() {
        this.setState({
            showQuestionModal: false,
        });
    }
    receiveQuestion(options) {
        console.log("接收到子组件传递过来的数据:" + options);
        let list = this.state.questionList;
        list.push(options);
        this.setState(
            {
                questionList: list,
            },
            () => {
                console.log(this.state.questionList);
            }
        );
        this.closeQuestion();
    }
    render() {
        const { showQuestionModal } = this.state;
        return (
            <View className="index">
                <View className="title">Taro问答实例</View>
                {showQuestionModal ? (
                    <AddQuestion
                        onClose={this.closeQuestion.bind(this)}
                        onReceiveQuestion={this.receiveQuestion.bind(this)}
                    />
                ) : null}
                <Button
                    className="btn-question"
                    onClick={this.addQuestion.bind(this)}
                >
                    提问
                </Button>
            </View>
        );
    }
}
