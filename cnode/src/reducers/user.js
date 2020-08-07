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
        default:
            return { ...prestate };
    }
}
