import * as ActionTypes from "./ActionTypes";
import {createAction } from "@reduxjs/toolkit"
function addNumer() {
  return {
    type: ActionTypes.NUMBER_ADDED,
    payload: {
    },
  };
}

// for returing all  we use (  )
// inside ( )  all thing would get returned
const decreaseNumber = () => ({
  type: ActionTypes.NUMBER_DECREASED,
  payload: {
  
  },
});


export { addNumer,decreaseNumber};
