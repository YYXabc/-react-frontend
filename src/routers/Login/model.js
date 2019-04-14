export const mapStateToProps = (state) => {
    return {
        login: state['login']
    }
}
export const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        login: (user) => {
            dispatch({
                type: 'login',
                user
            });
        }
    };
}