import {configureStore} from '@reduxjs/toolkit';
import reducer from "./RootReducer"
// This is a High order Function as it take Function as a input 
const store= configureStore({
    reducer:reducer
});

export default store;

