import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ReduceStore from "./useReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunkMiddleware from "redux-thunk";

const Store = createStore(
  ReduceStore,
  composeWithDevTools(applyMiddleware(reduxThunkMiddleware))
);

export default Store;
