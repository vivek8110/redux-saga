import { combineReducers } from "redux";
import productReducer from '../redux-saga/product/reducer/reducer'


const rootReducers = combineReducers({productReducer,
});

export default rootReducers;