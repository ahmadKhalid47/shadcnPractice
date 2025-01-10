import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Global from "./Global";
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  Global: Global,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
