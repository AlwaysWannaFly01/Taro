import Taro from "@tarojs/taro";
import { postJSON } from "../utils/request";
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
        if (result && result.data && result.data.success) {
            dispatch({
                type: "loginSuccess",
                accesstoken: params.accesstoken,
                avatar_url: result.data.avatar_url,
                login_name: result.data.loginname,
            });
        }
        return result.data;
    };
}
