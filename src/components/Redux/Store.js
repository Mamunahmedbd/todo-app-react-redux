import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ReduceStore from "./useReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const Store = createStore(
  ReduceStore,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;
