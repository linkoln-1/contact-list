import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { auth } from "./Auth";
import { contact } from "./Contact";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  //reducers
  logins: auth,
  people: contact,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
