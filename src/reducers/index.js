import loggedReducer from "./islogged";
import conuterReducer from "./counter";
import {combineReducers} from "redux"


const allReducers= combineReducers({
    counter:conuterReducer,
    islogged:loggedReducer
});

export default allReducers;