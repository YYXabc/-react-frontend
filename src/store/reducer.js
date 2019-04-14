const defatuleState = {
    collapsed: false, //侧边栏伸缩状态
    login: false//登陆状态
};

export default (state = defatuleState, action ) => {
    let newState = Object.assign({}, state);
    if (action.type === 'update_collapsed') {
        newState['collapsed'] = !state.collapsed;
        return newState;
    }
    if(action.type === 'login') {
        console.log(action);
        newState['login'] = true;
        newState['user'] = action.user;
        return newState;
    }
    return state;
}