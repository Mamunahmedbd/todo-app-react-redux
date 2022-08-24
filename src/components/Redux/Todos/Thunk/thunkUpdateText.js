import { updatedValue } from "../Action";

const thunkUpdatedText = (todoId, todoText, upEditable) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://todo-app-react-redux-thunk.herokuapp.com/api/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: todoText,
          isEditable: !upEditable,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await res.json();
    dispatch(updatedValue(todo.id, todo.text));
  };
};

export default thunkUpdatedText;
