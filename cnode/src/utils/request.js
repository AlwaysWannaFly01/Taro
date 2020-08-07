import Taro from "@tarojs/taro";
// import api from "../constants/api";

export function getJSON(url, data) {
    return Taro.request({
        url: url,
        data: data,
        method: "GET",
    });
}
export function postJSON(url, data) {
    return Taro.request({
        url: url,
        data: data,
        method: "POST",
        header: {
            "content-type": "application/json",
        },
    });
}

// export async function getTopicList() {
//     let res = await getJSON(api.getTopics).catch((msg) => {
//         console.log("出错了,错误信息:" + msg);
//     });
//     console.log('res返回数据之后,才会执行到这里');
//     return res;
// }
