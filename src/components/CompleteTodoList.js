import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchTodos from "./Redux/Todos/Thunk/FetchTodos";

export default function CompleteTodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(todos);
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);
  return (
    <>
      {todos
        .filter((todo) => todo.completed)
        .filter((todo) => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo key={todo.id} id={todo.id} {...todo} />
        ))}
    </>
  );
}
