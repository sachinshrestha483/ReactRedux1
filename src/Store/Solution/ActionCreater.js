import * as ActionTypes from "./ActionTypes";

function solutionAdded(description) {
  return {
    type: ActionTypes.SOLUTION_ADDED,
    payload: {
      description: description,
    },
  };
}

// for returing all  we use (  )
// inside ( )  all thing would get returned
const solutionRemoved = (id) => ({
  type: ActionTypes.SOLUTION_REMOVED,
  payload: {
    id: id,
  },
});

const solutionResolved = (id) => ({
  type: ActionTypes.SOLUTION_RESOLVED,
  payload: {
    id: id,
  },
});

export { solutionAdded, solutionRemoved,solutionResolved };
