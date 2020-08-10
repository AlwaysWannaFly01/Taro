import Taro from "@tarojs/taro";
import { getJSON, postJSON } from "../utils/request";
import api from "../constants/api";

export const ValidateUser = async (params) => {
    if (params && params.accessToken) {
        return true;
    }
    Taro.navigateTo({
        url: "/pages/login/index",
    });
    return false;
};

export function accessUserToken(params) {
    return async (dispatch) => {
        let result = await postJSON(api.checkUserToken, params);
        console.log(result);
        if (result && result.data && result.data.success) {
            dispatch({
                type: "loginSuccess",
                accesstoken: params.accesstoken,
                avatar_url: result.data.avatar_url,
                login_name: result.data.loginname,
            });
            Taro.navigateTo({
                url: "/pages/user/index",
            });
            return result.data;
        }
    };
}

//获取用户信息
export async function getUserInfo(params) {
    let result = await getJSON(api.getUserInfo + params);
    console.log(result);
    if (result && result.data && result.data.success) {
        return result.data;
    } else {
        Taro.showToast({ title: "获取用户信息失败" });
    }
}
