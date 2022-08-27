import { selectColor } from "../Action";

const thunkColorChange = (todoId, todoColor) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: todoColor,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();
    dispatch(selectColor(todo.id, todo.color));
  };
};

export default thunkColorChange;
