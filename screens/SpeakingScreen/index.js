import { connect } from "react-redux"
import Container from "./container"
import {actionCreators as scheduleActionCreators} from "./../../redux/modules/schedule"
const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        getSchedules : () =>{
            dispatch(scheduleActionCreators.getSchedules());
        }
    }
}
export default connect(null, mapDispatchToProps)(Container);
