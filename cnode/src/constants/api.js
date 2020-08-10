const rootpath = "https://cnodejs.org/api/v1";

const apiObject = {
  getTopics: rootpath + "/topics", // get /topics 主题首页
  getTopicInfo: rootpath + "/topic", // get /topic/:id 主题详情
  checkUserToken: rootpath + "/accesstoken", //验证用户token
  getUserInfo: rootpath + "/user/", //:loginname 用户详情
  createTopic: rootpath + "/topics", // 新建话题,已停用了
  replayTopic: rootpath + "/topic/", //回复话题消息, ?
  upReply: rootpath + "/reply/", //点赞, ?
};

export default apiObject;
