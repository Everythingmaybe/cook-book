import { combineReducers } from "redux";

import { configReducer } from "./config.reducer";

const reducers = combineReducers({
  config: configReducer,
} as any);

export default reducers;
