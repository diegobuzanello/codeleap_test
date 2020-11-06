import { createStore, applyMiddleware } from "redux";
import postReducer from "../reducers/posts";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(postReducer, composedEnhancer);
