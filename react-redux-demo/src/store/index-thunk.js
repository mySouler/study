import { combineReducers } from "redux";

import {getList} from "./reduce-thunk";

export default combineReducers({
    app: getList
});