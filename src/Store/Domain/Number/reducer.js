import * as ActionTypes from "./ActionTypes";

// here state =[] because in starting of
//application it also asks the reducer for data then
// the value of action would be equal to the undefined so we set the default value
// to the empty array

function reducer(state = 0, action) {
  if (action.type == ActionTypes.NUMBER_ADDED) {
    return state + 1;
  } else if (action.type == ActionTypes.NUMBER_DECREASED) {
    return state - 1;
  }

  return state;
}

export default reducer;
