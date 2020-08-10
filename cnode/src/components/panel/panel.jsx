import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "react-redux";
import "./panel.scss";
import { myTimeToLocal } from "../../utils/data";
class Panel extends Component {
    render() {
        console.log(this.props);
        const { listData, title } = this.props;
        return (
            <View className="topic-panel">
                <View className="topic-panel-title">{title}</View>
                {listData.map((item) => {
                    return (
                        <View className="topic-panel-list" key={item.id}>
                            <Image
                                className="topic-panel-list-img"
                                src={item.author.avatar_url}
                            />
                            <Text className="topic-panel-list-title">
                                {item.title}
                            </Text>
                            <Text className="topic-panel-list-date">
                                {myTimeToLocal(item.last_reply_at)}
                            </Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

export default Panel;