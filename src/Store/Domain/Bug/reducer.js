

export const BUG_ADDED="bugAdded";
export const BUG_REMOVED="bugRemoved";
export const BUG_RESOLVED="bugResolved";


function bugAdded(description) {
  return {
    type: BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

// for returing all  we use (  )
// inside ( )  all thing would get returned
const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id: id,
  },
});

const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id: id,
  },
});





let lastId = 0;

// here state =[] because in starting of
//application it also asks the reducer for data then
// the value of action would be equal to the undefined so we set the default value
// to the empty array

function reducer(state = [], action) {
  if (action.type == BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type == BUG_REMOVED) {
    return state.filter((bug) => bug.id != action.payload.id);
  } else if (action.type ==BUG_RESOLVED) {
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


export {
  bugAdded,
  bugRemoved,
  bugResolved      
}

export default reducer;


