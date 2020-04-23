import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  property: propertyReducer
});

export default rootReducer;
