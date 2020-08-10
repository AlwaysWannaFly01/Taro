import React, { Component } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import "./index.scss";
import Head from "../../components/head/head";
import Panel from "../../components/panel/panel";
import { getUserInfo } from "../../actions/user";

const TestData = {
    success: true,
    data: {
        loginname: "alsotang",
        avatar_url:
            "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
        githubUsername: "alsotang",
        create_at: "2012-09-09T05:26:58.319Z",
        score: 15820,
        recent_topics: [
            {
                id: "5c6d11d033b0b629ac8434ef",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "【深圳】腾讯云加速产品中心--前端工程师",
                last_reply_at: "2019-05-11T04:22:18.616Z",
            },
            {
                id: "5bd4772a14e994202cd5bdb7",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "服务器迁移至 aws 日本机房",
                last_reply_at: "2019-09-09T07:21:41.870Z",
            },
            {
                id: "5b9b5d2ba5ed9d2159fa312e",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "cnode社区静态资源域名改造",
                last_reply_at: "2018-10-27T14:04:54.155Z",
            },
            {
                id: "5b629556b71aedfe4c12667c",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "开发了一个腾讯云 Node.js SDK",
                last_reply_at: "2018-08-02T05:31:06.244Z",
            },
            {
                id: "5843092c3ebad99b336b1d48",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "使用 generator 按行读取文件的库，co-readline",
                last_reply_at: "2016-12-04T13:57:30.730Z",
            },
            {
                id: "58351689bde2b59e06141e9f",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "【腾讯】各种岗位均可内推，前后端均可",
                last_reply_at: "2019-08-19T12:26:37.201Z",
            },
            {
                id: "580ddc2eeae2a24f34e67e69",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "这，就是技术人的江湖",
                last_reply_at: "2018-10-17T08:43:54.082Z",
            },
            {
                id: "580460a5fdf3bd3d651186d1",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title:
                    "推荐你心中的CNode「极客代言人」，打造《中国技术社群英雄谱》",
                last_reply_at: "2016-10-24T04:09:13.002Z",
            },
            {
                id: "57ee19c93670ca3f44c5bfde",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "从url中解析出域名、子域名和有效顶级域名",
                last_reply_at: "2017-04-11T01:47:09.793Z",
            },
            {
                id: "57e917e2bb55ef3e1a17fcbd",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "https 免费证书获取指引",
                last_reply_at: "2017-06-22T01:14:19.918Z",
            },
            {
                id: "57e2520a7e77820e3acfe0ed",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "【深圳】腾讯云 CDN 前端团队诚招高级工程师",
                last_reply_at: "2016-11-17T13:21:42.774Z",
            },
            {
                id: "57c6a1d492fad7e46b4169b5",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title:
                    "一个模块：forceinterval，可无缝替换许多 setInterval 的场景",
                last_reply_at: "2016-08-31T10:17:33.671Z",
            },
            {
                id: "5759bef0e5fa62531af6e151",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "async/await 比 yield 好在哪里？",
                last_reply_at: "2020-08-10T03:42:02.835Z",
            },
            {
                id: "572afb6b15c24e592c16e1e6",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "新的社区推荐客户端：Noder",
                last_reply_at: "2016-07-07T13:24:42.321Z",
            },
            {
                id: "570924d294b38dcb3c09a7a0",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "timer 的 unref 函数",
                last_reply_at: "2020-01-16T08:36:42.040Z",
            },
        ],
        recent_replies: [
            {
                id: "56f364c7532839c33a99d17e",
                author: {
                    loginname: "alsotang",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120",
                },
                title: "【深圳】NodeParty at 腾讯大厦 2016.04.09",
                last_reply_at: "2020-07-31T02:21:32.785Z",
            },
            {
                id: "5ed4f1c682b588109b647030",
                author: {
                    loginname: "justjavac",
                    avatar_url:
                        "https://avatars1.githubusercontent.com/u/359395?v=4&s=120",
                },
                title: "Deno 中文社区来了 deno.js.cn",
                last_reply_at: "2020-06-20T03:03:37.856Z",
            },
            {
                id: "5ecf30c282b588109b6465e1",
                author: {
                    loginname: "backcj",
                    avatar_url:
                        "https://avatars0.githubusercontent.com/u/12507888?v=4&s=120",
                },
                title: "给大家排个雷：上海智思",
                last_reply_at: "2020-06-01T03:12:04.952Z",
            },
            {
                id: "5ec665caa87fc8583363d9a0",
                author: {
                    loginname: "xcatliu",
                    avatar_url:
                        "https://avatars0.githubusercontent.com/u/5453359?v=4&s=120",
                },
                title: "分享我用 Deno 写的静态网站生成器 - Pagic",
                last_reply_at: "2020-05-25T02:07:16.088Z",
            },
            {
                id: "5eb8fc4e2d0afc4087f54442",
                author: {
                    loginname: "zy445566",
                    avatar_url:
                        "https://avatars2.githubusercontent.com/u/14976489?v=4&s=120",
                },
                title: "警惕JS数组解构转参数导致爆栈问题",
                last_reply_at: "2020-05-22T02:20:44.824Z",
            },
        ],
    },
};

@connect((store) => {
    return {
        ...store.user,
    };
})
class User extends Component {
    state = {
        recent_topics: [],
        recent_replies: [],
    };
    componentWillReceiveProps(nextProps) {}

    componentWillUnmount() {}
    componentWillMount() {
        getUserInfo(this.props.login_name).then((res) => {
            console.log(res);
            if (res.success) {
                if (res.data.recent_topics.length > 0) {
                    this.setState({
                        recent_topics: res.data.recent_topics,
                    });
                } else {
                    this.setState({
                        recent_topics: TestData.data.recent_topics,
                        recent_replies: TestData.data.recent_replies,
                    });
                }
            }
        });
    }
    componentDidMount() {}
    componentDidShow() {}

    componentDidHide() {}

    render() {
        console.log(this.props);
        const { login_name, avatar_url } = this.props;
        const { recent_topics, recent_replies } = this.state;
        return (
            <View className="index">
                <Head loginName={login_name} avatarUrl={avatar_url} />
                <Panel listData={recent_topics} title="最近发布的话题"></Panel>
                <Panel listData={recent_replies} title="最近收到的回复" />
            </View>
        );
    }
}

export default User;
