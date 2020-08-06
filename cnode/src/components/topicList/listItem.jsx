import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { AtAvatar } from "taro-ui";
import "./listItem.scss";

class ListItem extends Component {
    getDateStr(str) {
        let T_index = str.indexOf("T");
        return str.substring(0, T_index);
    }
    geToDetail() {
        Taro.navigateTo({ url: "/pages/detail/index" });
    }
    render() {
        let { itemData } = this.props;
        let changeDate = this.getDateStr(itemData.create_at);
        return (
            <View
                className="topic-list-item"
                onClick={this.geToDetail.bind(this)}
            >
                <AtAvatar
                    image={
                        itemData.author.avatar_url
                            ? itemData.author.avatar_url
                            : "https://jdc.jd.com/img/200"
                    }
                    circle
                    className="headImg"
                    size="small"
                ></AtAvatar>
                <View className="item-main">
                    <View className="item-title">
                        {itemData.top === true ? (
                            <Text className="title-oper">置顶</Text>
                        ) : itemData.tab === "share" ? (
                            <Text className="title-oper share">分享</Text>
                        ) : (
                            <Text className="title-oper ask">问答</Text>
                        )}

                        <Text className="title-text">{itemData.title}</Text>
                    </View>
                    <View className="item-info">
                        <Text className="text">
                            {itemData.author ? itemData.author.loginname : ""}
                        </Text>
                        <Text className="text">
                            {itemData.reply_count + "/" + itemData.visit_count}
                        </Text>
                        <Text className="text">创建时间{changeDate}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default ListItem;
