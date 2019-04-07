export const mapStateToProps = (state) => {
    return state
}
export const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeCollapsed: () => {
            dispatch({
                type: 'update_collapsed',
            });
        }
    };
}