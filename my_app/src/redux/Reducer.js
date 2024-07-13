import TitleReducer from "./TitleReducer";
import CounterReducer from "./CounterReducer";

import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    TitleReducer,
    CounterReducer
})