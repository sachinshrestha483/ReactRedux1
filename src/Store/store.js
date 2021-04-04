import {createStore } from 'redux';
import reducer from "./RootReducer"
// This is a High order Function as it take Function as a input 
const store= createStore(reducer);

export default store;

