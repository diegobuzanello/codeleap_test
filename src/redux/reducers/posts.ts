import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  RECEIVED_DATA,
} from "../../actions/types";

const INITIAL_STATE = {
  data: [],
};

interface Post {
  id: number;
}

const postReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        data: [action.data, ...state.data],
      };
    case DELETE_POST:
      return {
        data: state.data.filter((post: Post) => post.id !== action.id),
      };
    case EDIT_POST:
      return {
        data: state.data.map((item: Post) => {
          return item.id === action.data.id ? action.data : item;
        }),
      };
    case RECEIVED_DATA:
      return {
        data: action.data,
      };

    default:
      return state;
  }
};

export default postReducer;
