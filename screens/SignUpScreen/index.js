import { connect } from "react-redux";
import Container from "./container";
import {actionCreators as userAction} from "../../redux/modules/user"


// const mapDispatchToProps = (dispatch, ownProps) =>{
//     return {
//         login : (username, password) =>{
//             dispatch(userAction.login(username,password));
//         }
//     }
// }
export default connect(null, null)(Container);