import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "reduex-persis/lib/storage";
import thunk from "redux-thunk";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  user
});

const configureStore = () => {
    let store = createStore(reducer,applyMiddleware(...middlewares));
    let persistor = persistStore(store);
    return {store, persistor}
}

export default configureStore;