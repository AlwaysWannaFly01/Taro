import TopicList from "../components/topicList/topicList";

const TOPIC_STATE = {
    page: 1,
    limit: 20,
    mdrender: true, //默认为true,渲染出现的所有 markdown 格式文本。
    list: [],
};

export default function topicList(prestate = TOPIC_STATE, action) {
    switch (action.type) {
        case "getTopicList":
            return {
                ...prestate,
                list: action.list,
                page: 1, //切换分类后,上一页的page 增加的页码 要重置
            };
        case "appendTopicList":
            return {
                ...prestate,
                list: prestate.list.concat(action.list),
                page: action.page,
            };
        default:
            return {
                ...prestate,
            };
    }
}
