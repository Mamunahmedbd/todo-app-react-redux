import { isEditabled } from "../Action";

const thunkIsEditable = (todoId, todoIdEditable) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        isEditable: !todoIdEditable,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();
    dispatch(isEditabled(todo.id));
  };
};

export default thunkIsEditable;
