const defatuleState = {
    collapsed: false, //侧边栏伸缩状态
    login: true//登陆状态
};

export default (state = defatuleState, action ) => {
    let newState = Object.assign({}, state);
    if (action.type === 'update_collapsed') {
        newState['collapsed'] = !state.collapsed;
        return newState;
    }
    return state;
}