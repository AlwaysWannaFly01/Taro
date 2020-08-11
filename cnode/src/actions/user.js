import Taro from "@tarojs/taro";
import { getJSON, postJSON } from "../utils/request";
import api from "../constants/api";

export const ValidateUser = async (params) => {
    if (params && params.accesstoken) {
        return true;
    }
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
            return result.data;
        } else {
            dispatch({
                type: "loginFail",
                accesstoken: null,
                avatar_url: null,
                login_name: null,
            });
            return false;
        }
        return false;
    };
}

//获取用户信息
export async function getUserInfo(params) {
    let result = await getJSON(api.getUserInfo + params);
    if (result && result.data && result.data.success) {
        return result.data;
    } else {
        Taro.showToast({ title: "获取用户信息失败" });
    }
}
