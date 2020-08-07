import Taro from "@tarojs/taro";
export const ValidateUser = async (params) => {
    if (params && params.accessToken) {
        return true;
    }
    Taro.navigateTo({
        url: "/pages/login/index",
    });
    return false;
};
