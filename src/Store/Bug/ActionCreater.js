import * as ActionTypes from "./ActionTypes";

function bugAdded(description) {
  return {
    type: ActionTypes.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

// for returing all  we use (  )
// inside ( )  all thing would get returned
const bugRemoved = (id) => ({
  type: ActionTypes.BUG_REMOVED,
  payload: {
    id: id,
  },
});

const bugResolved = (id) => ({
  type: ActionTypes.BUG_RESOLVED,
  payload: {
    id: id,
  },
});

export { bugAdded, bugRemoved,bugResolved };
