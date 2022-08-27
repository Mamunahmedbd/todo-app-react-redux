import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPPLETED,
  COLORSELECTED,
  DELETED,
  ISEDITABLE,
  LOADED,
  TOGGLE,
  UPDATEDVALUE,
} from "./ActionType";

import initialState from "./intialState";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
          isEditable: false,
        },
      ];

    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ISEDITABLE:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          isEditable: !todo.isEditable,
        };
      });
    case UPDATEDVALUE:
      const { ide, text } = action.payload;
      return state.map((todo) => {
        if (todo.id !== ide) {
          return todo;
        }
        return {
          ...todo,
          text: text,
          isEditable: !todo.isEditable,
        };
      });

    case COLORSELECTED:
      const { id, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
