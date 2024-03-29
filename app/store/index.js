import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import reducers from "../reducers";
const LoggerMiddleware = createLogger();
export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, LoggerMiddleware)
);
