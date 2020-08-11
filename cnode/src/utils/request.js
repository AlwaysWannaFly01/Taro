import Taro from "@tarojs/taro";
// import api from "../constants/api";

export function getJSON(url, data) {
    Taro.showLoading();
    return Taro.request({
        url: url,
        data: data,
        method: "GET",
    }).then((res) => {
        Taro.hideLoading();
        return res;
    });
}
export function postJSON(url, data) {
    Taro.showLoading();
    return Taro.request({
        url: url,
        data: data,
        method: "POST",
        header: {
            "content-type": "application/json",
        },
        mode: "cors",
    }).then((res) => {
        Taro.hideLoading();
        return res;
    });
}

// export async function getTopicList() {
//     let res = await getJSON(api.getTopics).catch((msg) => {
//         console.log("出错了,错误信息:" + msg);
//     });
//     console.log('res返回数据之后,才会执行到这里');
//     return res;
// }
