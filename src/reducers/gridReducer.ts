import { CHECK_WINNER, GENERATE_NEW_GRID, UPDATE_GRID } from "../actions/type";

const initalState = {
  size: 5,
  grid: [],
  updated: false,
  win: false,
  activeCell: null, //row, col
};

export let gridReducer = (state = initalState, action:any) => {
  switch (action.type) {
    case GENERATE_NEW_GRID:
      return {
        ...state,
        grid: action.payload[0],
        size: action.payload[1],
        activeCell: action.payload[2],
        win: false,
      };
    case UPDATE_GRID:
      return {
        ...state,
        grid: action.payload[0],
        updated: action.payload[1],
        activeCell: action.payload[2],
      };
    case CHECK_WINNER:
      return {
        ...state,
        win: action.payload,
      };
    default: {
      return state;
    }
  }
};
