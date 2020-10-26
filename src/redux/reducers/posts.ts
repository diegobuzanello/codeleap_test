import { ADD_POST, UPDATE_POST, DELETE_POST } from "../../actions/index";

const postReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case ADD_POST:
      return state.concat([action.data]);
    case UPDATE_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.title,
            content: action.data.content,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

export default postReducer;
