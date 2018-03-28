//Import
import { API_URL } from "../../constans";
import { AsyncStorage } from "react-native";
//Actions

// const LOG_IN = "LOG_IN";
// const LOG_OUT = "LOG_OUT";
// const SET_USER = "SET_USER";

// //Action Creators
// function setLogin(token) {
//   return {
//     type: LOG_IN,
//     token
//   };
// }

// function setLogout() {
//   return {
//     type: LOG_OUT
//   };
// }

// function setUser(user) {
//   return {
//     type: SET_USER,
//     user
//   };
// }
// //API Actions
// function login(username, password) {
//   return dispatch => {
//     return fetch(`${API_URL}/rest-auth/login/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         username,
//         password
//       })
//     })
//       .then(response => response.json())
//       .then(json => {
//         if (json.token&& json.user) {
//           dispatch(setLogin(json.token));
//           dispatch(setUser(json.user));
//           return true;
//         }else{
//           return false;
//         }
//       })
//       .catch(err => console.log(err));
//   };
// }

//Initial State
const initialState = {
};
//Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
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

// const actionCreators = {
//   login
// };
// //Reducer Function
// //Export
// export { actionCreators };
export default reducer;
