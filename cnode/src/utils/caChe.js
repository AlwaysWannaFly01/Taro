import Taro from "@tarojs/taro";

export const getCache = (key) => {
    let result = Taro.getStorageSync(key);
    if (result) {
        result = JSON.parse(result);
    } else {
        result = null;
    }
    return result;
};

export const setCache = (key, value) => {
    let param;
    if (typeof value === "object") {
        param = JSON.stringify(value);
    }
    Taro.setStorageSync(key, param);
};
