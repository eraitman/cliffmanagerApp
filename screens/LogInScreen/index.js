import { connect } from "react-redux";
import Container from "./container";
import {actionCreators as userAction} from "../../redux/modules/user"

// const mapStateToProps = (state,ownProps) =>{
// return{
    
// }
// }

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        login : (username, password) =>{
           return dispatch(userAction.login(username,password));
        }
    }
}
export default connect(null, mapDispatchToProps)(Container);