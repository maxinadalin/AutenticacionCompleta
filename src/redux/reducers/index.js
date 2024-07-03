import { combineReducers } from "redux";
import auth from "./auth";
import alert from "../../components/alert/alert";


export default combineReducers({
auth,
alert
});