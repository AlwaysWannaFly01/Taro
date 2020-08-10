import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { AtForm, AtInput, AtButton } from "taro-ui";
import { accessUserToken } from "../../actions/user";
import "./form.min.css";

@connect(
    (store) => {
        return { ...store.user };
    },
    (dispatch) => {
        return {
            getAccessUserToken(param) {
                dispatch(accessUserToken(param));
            },
        };
    }
)
class Form extends Component {
    state = {
        value: "",
    };
    handleChange(event) {
        this.setState({
            value: event,
        });
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return event;
    }
    onReset(event) {
        this.setState({
            value: "",
        });
    }
    submit() {
        let { value } = this.state;
        if (value) {
            if (this.props.getAccessUserToken) {
                this.props
                    .getAccessUserToken({
                        accesstoken: value,
                    })
                    // .then((res) => {
                    //     console.log(res);
                    //     Taro.redirectTo({ url: "/pages/user/index" });
                    // })
            }
        } else {
            Taro.showToast({
                title: "请输入秘钥再进行登录验证!",
                icon: "none",
            });
        }
    }
    render() {
        return (
            <View className="form-container">
                <AtForm>
                    <AtInput
                        name="value"
                        title=""
                        type="text"
                        placeholder="请输入accesstoken"
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button
                        className="submit-btn"
                        onClick={this.submit.bind(this)}
                    >
                        提交
                    </Button>
                    <Button formType="reset" onClick={this.onReset.bind(this)}>
                        重置
                    </Button>
                </AtForm>
            </View>
        );
    }
}

export default Form;
