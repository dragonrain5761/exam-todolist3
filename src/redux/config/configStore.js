import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
