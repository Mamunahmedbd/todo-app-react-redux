import TodoList from "./components/TodoList";
import Store from "./components/Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <TodoList />
    </Provider>
  );
}

export default App;
