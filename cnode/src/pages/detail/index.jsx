import React, { Component } from "react";
import Taro, { getCurrentInstance, stopPullDownRefresh } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "react-redux";
import "./index.scss";
import { getTopicInfo } from "../../actions/topicList";
import TopicInfo from "../../components/topicInfo/topicInfo";
@connect(
    (store) => {
        return {
            user: store.user,
            topicList: store.topicList,
        };
    },
    (dispatch) => {
        return {
            getInfo(params) {
                dispatch(getTopicInfo(params));
            },
        };
    }
)
class Index extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps);
    }

    componentWillUnmount() {}
    componentWillMount() {
        let { topicId } = getCurrentInstance().router.params;
        // console.log("topicId:" + topicId);

        // console.log(this.props);
        const { user } = this.props;
        this.props.getInfo &&
            this.props.getInfo({
                accesstoken: user.accesstoken,
                topicId,
                mdrender: true,
            });
    }
    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        // console.log(this.props);

        const { topicList } = this.props;
        console.log(topicList);
        const { topicInfo } = topicList;
        console.log(topicInfo);
        return (
            <View className="detail">
                <TopicInfo topicInfo={topicInfo } />
            </View>
        );
    }
}

export default Index;
