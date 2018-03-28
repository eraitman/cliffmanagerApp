import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as scheduleActionCreators } from "./../../redux/modules/schedule";

const mapStateToProps = (state, ownProps) => {
    
    const { schedule : {schedules}} = state
    
    return {
        schedules
    };
  };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSchedules: () => {
       dispatch(scheduleActionCreators.getSchedules());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
