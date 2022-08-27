import { deleted } from "../Action";

const thunkTodoDelete = (todoId) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    await res.json();
    dispatch(deleted(todoId));
  };
};

export default thunkTodoDelete;
