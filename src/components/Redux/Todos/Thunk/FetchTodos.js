import { getFetchTodos } from "../Action";

const fetchTodos = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();
  dispatch(getFetchTodos(todos));
};

export default fetchTodos;
