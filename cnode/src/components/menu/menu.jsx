import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { AtDrawer } from "taro-ui";
import { showDrawer, changeCataState, hideDrawer } from "../../actions/menu";
import { ValidateUser } from "../../actions/user";
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
            hideMenu() {
                dispatch(hideDrawer());
            },
            changeCata(cata) {
                dispatch(changeCataState(cata));
            },
        };
    }
)
class Menu extends Component {
    //显示抽屉
    showDrawer() {
        this.props.showMenu && this.props.showMenu();
    }
    closeDrawer() {
        this.props.hideMenu && this.props.hideMenu();
    }
    getItems(cataData) {
        return cataData.map((item, index) => item.value);
    }
    //点击分类触发
    clickCata(index) {
        let { cataData } = this.props;
        let clickItem = cataData[index];
        /* 点击其它项才请求 */
        if (this.props.currentCata.key !== clickItem.key) {
            this.props.changeCata && this.props.changeCata(clickItem);
        }
    }
    goToUser() {
        let { user } = this.props;
        // console.log(user);
        // console.log(ValidateUser(user));
        ValidateUser(user).then((res) => {
            if (res) {
                Taro.navigateTo({
                    url: "/pages/user/index",
                });
            }
        });
    }
    render() {
        let { showDrawerFlag, cataData } = this.props;
        let items = this.getItems(cataData);
        return (
            <View className="topicList-menu">
                <View className="_drawer">
                    <AtDrawer
                        show={showDrawerFlag}
                        mask
                        items={items}
                        onItemClick={this.clickCata.bind(this)}
                        onClose={this.closeDrawer.bind(this)}
                    ></AtDrawer>
                </View>
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
                <View
                    className="at-icon at-icon-user"
                    onClick={this.goToUser.bind(this)}
                ></View>
            </View>
        );
    }
}

export default Menu;
