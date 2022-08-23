import { COLORCHAGNE, STATUSCHANGE } from "./ActionType";

export const colorChange = (color, changetype) => {
  return {
    type: COLORCHAGNE,
    payload: {
      color,
      changetype,
    },
  };
};

export const statusChange = (status) => {
  return {
    type: STATUSCHANGE,
    payload: status,
  };
};
