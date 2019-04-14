import Fruits from '../components/Fruits';
import Cigarette from '../components/Cigarette';
import Snacks from '../components/Snacks';
export const mapStateToProps = (state) => {
    return {
        state,
        tabs:{
            Fruits,
            Cigarette,
            Snacks
        }
    }
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