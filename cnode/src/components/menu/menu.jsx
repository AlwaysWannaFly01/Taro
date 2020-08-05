import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { AtDrawer, AtIcon } from "taro-ui";
import { showDrawer } from "../../actions/menu";

import "./menu.scss";

@connect(
    (store) => {
        return { ...store.menu };
    },
    (dispatch) => {
        return {
            showMenu() {
                dispatch(showDrawer());
            },
        };
    }
)
class Menu extends Component {
    //显示抽屉
    showDrawer() {
        this.props.showMenu && this.props.showMenu();
    }
    render() {
        let { showDrawer } = this.props;
        return (
            <View className="topicList-menu">
                <AtDrawer
                    className="_drawer"
                    style="position:absolute"
                    show={showDrawer}
                    mask
                    items={["菜单1", "菜单2"]}
                ></AtDrawer>
                <View
                    className="at-icon at-icon-menu"
                    size="30"
                    onClick={this.showDrawer.bind(this)}
                ></View>
                <Text className="title">
                    {this.props.currentCata.value
                        ? this.props.currentCata.value
                        : ""}
                </Text>
                <View className="at-icon at-icon-user"></View>
            </View>
        );
    }
}

export default Menu;
