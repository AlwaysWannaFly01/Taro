import { getJSON, postJSON } from "../utils/request";
import api from "../constants/api";
//请求首页数据
export function getTopicList(params) {
    return async (dispatch) => {
        let result = await getJSON(api.getTopics, params);
        if (result && result.data) {
            console.log(result);
            if (result.data.success) {
                dispatch({
                    type: "getTopicList",
                    list: result.data.data,
                });
            }
        }
    };
}

export function getNextList(params) {
    return async (dispatch) => {
        let result = await getJSON(api.getTopics, params);
        if (result && result.data) {
            if (result.data.success) {
                if (result.data.data.length > 0) {
                    dispatch({
                        type: "appendTopicList",
                        list: result.data.data,
                        page: params.page,
                    });
                }
            }
        }
    };
}
