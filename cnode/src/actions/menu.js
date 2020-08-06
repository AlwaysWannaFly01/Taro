//显示抽屉
export function showDrawer() {
    return (dispatch) => {
        dispatch({
            type: "showDrawer",
        });
    };
}
//隐藏抽屉
export function hideDrawer() {
    return (dispatch) => {
        dispatch({
            type: "hideDrawer",
        });
    };
}

//切换当前分类
export function changeCataState(cata) {
    return (dispatch) => {
        dispatch({
            type: "changeCategory",
            currentCata: cata,
        });
    };
}
