import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

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
