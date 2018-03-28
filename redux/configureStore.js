import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user"
import schedule from "./modules/schedule"
import speaking from "./modules/speaking"
import today from "./modules/today"

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(persistConfig, {
 user,
 today,
 speaking,
 schedule
});

const configureStore = () => {
    let store = createStore(reducer,applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {store, persistor}
}

export default configureStore;