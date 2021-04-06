import { configureStore } from "@reduxjs/toolkit";
import reducer from "./RootReducer";
import logger from "./Middleware/logger";
// This is a High order Function as it take Function as a input
const store = configureStore({
  reducer: reducer,
  // middleware:[logger("dedrefeff")]
});

export default store;
