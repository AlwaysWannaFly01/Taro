import React, { Component } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import AddQuestion from "./addQuestion";
import { AtIcon, AtButton } from "taro-ui";

function getStore(key) {
    let str = Taro.getStorageSync(key);
    if (!str) {
        return [];
    }
    return JSON.parse(str);
}

function setStore(key, obj) {
    let str = null;
    if (typeof obj == "object") {
        str = JSON.stringify(obj);
    }
    Taro.setStorageSync(key, str);
}

export default class Index extends Component {
    state = {
        showQuestionModal: false,
        questionList: getStore("question"),
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
        // console.log("接收到子组件传递过来的数据:" + options);
        let list = this.state.questionList;
        list.push({ id: parseInt(Math.random() * 10000), vote: 0, ...options });
        this.setState(
            {
                questionList: list,
            },
            () => {
                // console.log(this.state.questionList);
                setStore("question", this.state.questionList);
            }
        );
        this.closeQuestion();
    }

    vote(param) {
        const { questionList } = this.state;
        if (param) {
            param.vote += 1;
        }
        let newList = questionList.map((item) => {
            if (item.id === param.id) {
                item = { ...param };
            }
            return item;
        });
        this.setState(
            {
                questionList: newList,
            },
            () => {
                setStore("question", this.state.questionList);
            }
        );
    }
    cutVote(param) {
        const { questionList } = this.state;
        if (param) {
            param.vote > 0 ? (param.vote -= 1) : 0;
        }
        let newList = questionList.map((item) => {
            if (item.id === param.id) {
                item = { ...param };
            }
            return item;
        });
        this.setState(
            {
                questionList: newList,
            },
            () => {
                setStore("question", this.state.questionList);
            }
        );
    }
    compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1; // 降序排列
        }
    }
    render() {
        const { showQuestionModal, questionList } = this.state;
        let sortList = questionList.sort(this.compare('vote'));
        return (
            <View className="index">
                <View className="title">Taro问答实例</View>
                <View className="question-list">
                    {sortList.map((item, index) => {
                        return (
                            <View key={index} className="list">
                                <View className="left">
                                    <View className="list-title">
                                        {item.title}
                                    </View>
                                    <View className="list-des">{item.des}</View>
                                </View>
                                <View className="right">
                                    <View className="icon">
                                        <AtIcon
                                            value="star-2"
                                            size="20"
                                            color="#F00"
                                            onClick={this.vote.bind(this, item)}
                                        ></AtIcon>
                                    </View>
                                    <Text>{item.vote ? item.vote : 0}</Text>
                                    <View className="icon">
                                        <AtIcon
                                            value="star"
                                            size="20"
                                            onClick={this.cutVote.bind(
                                                this,
                                                item
                                            )}
                                        ></AtIcon>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>

                {showQuestionModal ? (
                    <AddQuestion
                        onClose={this.closeQuestion.bind(this)}
                        onReceiveQuestion={this.receiveQuestion.bind(this)}
                    />
                ) : null}
                <AtButton
                    type="primary"
                    className="btn-question"
                    onClick={this.addQuestion.bind(this)}
                >
                    提问
                </AtButton>
            </View>
        );
    }
}
