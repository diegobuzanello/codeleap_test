import { createStore } from "redux";
import postReducer from "../reducers/posts";

export const store = createStore(postReducer);
