import { added } from "../Action";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://todo-app-react-redux-thunk.herokuapp.com/api/todos",
      {
        method: "POST",
        body: JSON.stringify({
          text: todoText,
          completed: false,
          isEditable: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};

export default addTodo;
