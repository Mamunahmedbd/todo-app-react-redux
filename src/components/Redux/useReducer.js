import { combineReducers } from "redux";
import FilterReducer from "./Filters/FiltersReducer";
import TodoReducer from "./Todos/TodosReducer";

const ReduceStore = combineReducers({
  todos: TodoReducer,
  filters: FilterReducer,
});

export default ReduceStore;
