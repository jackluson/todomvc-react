import {createStore, combineReducers} from 'redux'
import * as todos from './todos/reducer'
import * as visibilityFilter from './visible-filter/reducer'

let store = createStore(
  combineReducers({...todos,...visibilityFilter}),
)

export default store;