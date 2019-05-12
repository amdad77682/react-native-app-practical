import { combineReducers } from "redux";
import { itemReducer } from "../modules/Items_Collection/reducer";

const appReducers = combineReducers({
  items: itemReducer
});

const reducers = (state, action) => {
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }
  return appReducers(state, action);
};

export default reducers;
