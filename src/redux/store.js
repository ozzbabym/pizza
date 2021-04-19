import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import {pizzasReducer} from './reducers/pizzasReducer'

const rootRedusers = combineReducers({
    pizzasReducer
})

export const store = createStore(rootRedusers, applyMiddleware(thunk)) 