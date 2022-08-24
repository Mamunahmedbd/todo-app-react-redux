import { getFetchTodos } from "../Action";

const fetchTodos = async (dispatch) => {
  const response = await fetch(
    "https://todo-app-react-redux-thunk.herokuapp.com/api/todos"
  );
  const todos = await response.json();
  dispatch(getFetchTodos(todos));
};

export default fetchTodos;
