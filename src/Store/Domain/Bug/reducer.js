import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // action => action Handler

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      bugs = bugs.splice(action.payload.index, 1);
    },

    bugResolved: (bugs, action) => {
      var index = bugs.findIndex((i) => i.id == action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export default slice.reducer;

//Selector
// export const getUnresolvedBugs = (state) =>
//   state.domainReducer.bug.filter((e) => !e.resolved);

export const getUnresolvedBugs = createSelector(
  (state) => state.domainReducer.bug,
  (bugs) => bugs.filter((e) => !e.resolved)
);
// in first we pass selecter function the output of selecter function
// would be the input of the result function we can pass the multiple selectors
// if the output of the selector merans the input of the
// result function remains the same the logic not going tobe re calculated
//it just return from cache
