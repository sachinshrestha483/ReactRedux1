import { combineReducers } from "redux";
import bugReducer from "./Bug/reducer";
import solutionReducer from "./Solution/reducer";
import numberReducer from "./Number/reducer";

export default combineReducers({
  bug: bugReducer,
  solution: solutionReducer,
  number: numberReducer,
});
