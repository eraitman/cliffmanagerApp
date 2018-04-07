//Import
import { API_URL } from "../../constans";
import { AsyncStorage } from "react-native";
//Actions

const SET_SCHEDULES = "SET_SCHEDULES";

//Action Creators
function setSchedules(schedules) {
  return {
    type: SET_SCHEDULES,
    schedules
  };
}

// //API Actions
function getSchedules(username, password) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    return fetch(`${API_URL}/plan/schedules/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json) {
          dispatch(setSchedules(json));
          return true;
        } else {
          return false;
        }
      })
      .catch(err => console.log(err));
  };
}

//Initial State
const initialState = {
    schedules :[]
};
//Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
      case SET_SCHEDULES :
      return applySetSchedules(state,action)
    default:
      return state;
  }
}


function applySetSchedules(state,action)
{
    const {schedules} = action
    return({
        ...state,
        schedules
    })

}
// function applyLogin(state, action) {
//   const { token } = action;

//   return {
//     ...state,
//     isLoggedIn: true,
//     token
//   };
// }

// function applyLogout(state, action) {
//   AsyncStorage.clear();
//   return {
//     ...state,
//     isLoggedIn: false,
//     token: ""
//   };
// }

// function applySetUser(state, action) {
//   const { user } = action;
//   return {
//     ...state,
//     profile: user
//   };
// }

const actionCreators = {
    getSchedules
};
//Reducer Function
//Export
export { actionCreators };
export default reducer;
