import initialState from "./initalState";
import { STATUSCHANGE, COLORCHAGNE } from "./ActionType";

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHAGNE:
      const { color, changetype } = action.payload;
      switch (changetype) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existing) => existing !== color),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default FilterReducer;
