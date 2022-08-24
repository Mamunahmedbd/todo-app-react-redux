import { toggled } from "../Action";

const toggleStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://todo-app-react-redux-thunk.herokuapp.com/api/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todoStatus = await response.json();
    dispatch(toggled(todoStatus.id, todoStatus.completed));
  };
};

export default toggleStatus;
