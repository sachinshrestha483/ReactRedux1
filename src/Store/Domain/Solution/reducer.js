import * as ActionTypes from "./ActionTypes";

let lastId = 0;

// here state =[] because in starting of
//application it also asks the reducer for data then
// the value of action would be equal to the undefined so we set the default value
// to the empty array

function reducer(state = [], action) {
  if (action.type == ActionTypes.SOLUTION_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type == ActionTypes.SOLUTION_REMOVED) {
    return state.filter((bug) => bug.id != action.payload.id);
  } else if (action.type == ActionTypes.SOLUTION_RESOLVED) {
    return state.map((e) => {
      if (e.id == action.payload.id) {
        return {
          ...e,
          resolved: true,
        };
      }

      return e;
    });
  }

  return state;
}

export default reducer;
