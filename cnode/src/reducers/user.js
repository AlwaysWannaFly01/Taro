import { getCache } from "../utils/caChe";

const caCheKey = "cnode-user-key";
const userCache = getCache(caCheKey) ? getCache(caCheKey) : {};
const USER_STATE = { ...userCache };
console.log(USER_STATE);

export default function (prestate = USER_STATE, action) {
    switch (action.type) {
        default:
            return { ...prestate };
    }
}
