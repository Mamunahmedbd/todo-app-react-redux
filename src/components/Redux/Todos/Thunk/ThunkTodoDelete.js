import { deleted } from "../Action";

const thunkTodoDelete = (todoId) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://todo-app-react-redux-thunk.herokuapp.com/api/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );
    await res.json();
    dispatch(deleted(todoId));
  };
};

export default thunkTodoDelete;
