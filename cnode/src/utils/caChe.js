import Taro from "@tarojs/taro";

export const getCache = (key) => {
    let result = Taro.getStorageSync(key);
    console.log(result);
    if (result) {
        return result;
    }
};

export const setCache = (key) => {
};
