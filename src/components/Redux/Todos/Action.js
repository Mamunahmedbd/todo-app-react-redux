import {
  ADDED,
  TOGGLE,
  CLEARCOMPPLETED,
  ALLCOMPLETED,
  COLORSELECTED,
  DELETED,
} from "./ActionType";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const selectColor = (id, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      id,
      color,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPPLETED,
  };
};
