import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "./MainLayout";
import { useEffect } from "react";
import fetchTodos from "./Redux/Todos/Thunk/FetchTodos";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);
  console.log(todos);
  return (
    <MainLayout>
      {todos
        .filter((todo) => !todo.completed)
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
    </MainLayout>
  );
}
