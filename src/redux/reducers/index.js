import { combineReducers } from "redux";
import auth from "./auth";
import Alert from "./alert";


export default combineReducers({
auth,
Alert
});