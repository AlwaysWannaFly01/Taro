import { getCache, setCache } from "../utils/caChe";

const caCheKey = "cnode-user-key";
const userCache = getCache(caCheKey) ? getCache(caCheKey) : {};
const USER_STATE = { ...userCache };

export default function user(prestate = USER_STATE, action) {
    switch (action.type) {
        case "loginSuccess":
            // console.log(action);
            let successState = { ...prestate, ...action };
            setCache(caCheKey, successState);
            return successState;
        case "loginFail":
            let failState = {
                ...prestate,
                accesstoken: action.accesstoken,
                loginname: action.login_name,
                avatar_url: action.avatar_url,
            };
            console.log(failState);
            setCache(caCheKey, failState );
            return failState;

        default:
            return { ...prestate };
    }
}
