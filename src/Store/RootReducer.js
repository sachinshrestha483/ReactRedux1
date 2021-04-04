import { combineReducers } from "redux";
import DomainReducer from "./Domain/DomainReducer";

export default combineReducers({
  domainReducer: DomainReducer,
  
});
