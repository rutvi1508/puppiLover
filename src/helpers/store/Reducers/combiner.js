import { combineReducers } from "redux";
import ActionReducer from "src/helpers/store/Reducers/reducer";

const rootReducer = combineReducers({ ActionReducer: ActionReducer });

export default rootReducer;
