import {
  ADDED,
  TOGGLE,
  CLEARCOMPPLETED,
  ALLCOMPLETED,
  COLORSELECTED,
  DELETED,
  ISEDITABLE,
  UPDATEDVALUE,
  LOADED,
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

export const getFetchTodos = (todos) => {
  return {
    type: LOADED,
    payload: todos,
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

export const isEditabled = (id) => {
  return {
    type: ISEDITABLE,
    payload: id,
  };
};

export const updatedValue = (ide, text) => {
  return {
    type: UPDATEDVALUE,
    payload: {
      ide,
      text,
    },
  };
};
