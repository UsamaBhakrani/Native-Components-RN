import { INCREASE, DECREASE } from "../actions";

const toAdd = 15;

const colorReducer = (state, action) => {
  if (action.colorToChange === "red" && action.payload === INCREASE) {
    return {
      ...state,
      red: state.red + toAdd,
    };
  }
  if (action.colorToChange === "red" && action.payload === DECREASE) {
    return {
      ...state,
      red: state.red - toAdd,
    };
  }
  if (action.colorToChange === "green" && action.payload === INCREASE) {
    return {
      ...state,
      green: state.green + toAdd,
    };
  }
  if (action.colorToChange === "green" && action.payload === DECREASE) {
    return {
      ...state,
      green: state.green - toAdd,
    };
  }
  if (action.colorToChange === "blue" && action.payload === INCREASE) {
    return {
      ...state,
      blue: state.blue + toAdd,
    };
  }
  if (action.colorToChange === "blue" && action.payload === DECREASE) {
    return {
      ...state,
      blue: state.blue - toAdd,
    };
  }
  return state;
};

export default colorReducer;
