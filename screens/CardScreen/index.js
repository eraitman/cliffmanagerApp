import { connect } from "react-redux";
import Container from "./container";
import {actionCreators as userAction} from "../../redux/modules/user"


const mapStateToProps = (state, ownProps) => {
    const {user} = state;
    return {
        isLoggedIn : user.isLoggedIn,
        profile : user.profile
    };
}


const mapDispatchToProps =  (dispatch, ownProps) =>{
    return  {
        logout : () =>{
           return dispatch( userAction.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);