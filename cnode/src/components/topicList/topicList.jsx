import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text, ScrollView } from "@tarojs/components";
import { connect } from "react-redux";
import { getTopicList, getNextList } from "../../actions/topicList";
import ListItem from "./listItem";

@connect(
    (store) => {
        return { ...store.topicList, currentCataValue: store.menu.currentCata };
    },
    (dispatch) => {
        return {
            getList(params) {
                dispatch(getTopicList(params));
            },
            getNext(params) {
                dispatch(getNextList(params));
            },
        };
    }
)
class TopicList extends Component {
    componentWillMount() {
        let { page, limit, currentCataValue, mdrender } = this.props;
        this.props.getList &&
            this.props.getList({
                page,
                limit,
                mdrender,
                tab: currentCataValue.key,
            });
    }
    //分页请求
    onScrollToLower() {
        console.log("到底了");
        let { page, limit, currentCataValue, mdrender } = this.props;
        this.props.getNext &&
            this.props.getNext({
                page: page + 1,
                limit,
                mdrender,
                tab: currentCataValue.key,
            });
    }
    render() {
        let { list } = this.props;
        return (
            <ScrollView
                scrollY
                onScrollToLower={this.onScrollToLower.bind(this)}
                style={{ height: "650PX" }}
            >
                {list.map((item, index) => (
                    <ListItem itemData={item}></ListItem>
                ))}
            </ScrollView>
        );
    }
}

export default TopicList;
