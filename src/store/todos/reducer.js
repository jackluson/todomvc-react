import * as types from './action-type'
import Immutable from 'immutable'

const initState = [
  Immutable.Map(
    {
      text: 'Do todolist Demo',
      completed: false,
      id: 0
    }
  )
]
const initImmutableState = Immutable.List(initState)
export function todos(state = initImmutableState, action) {
  switch (action.type){
    case types.ADD_TODO:
      const imuItem = Immutable.Map({
        text: action.text,
        completed: false,
        id: state.count() > 0 ? state.get(state.count() - 1).get('id') + 1 : 0
      })
      return state.push(imuItem)
    case types.TOGGLE_TODO:
      return state.map(todo =>{
        return todo.get('id') === action.id ? todo.update('completed', val => !val): todo
      }
      )
    case types.DELETE_TODO:
      return state.filter(todo =>
        todo.get('id') !== action.id
      )
    case types.TOGGLE_ALL:
      return state.map(todo => todo.update('completed',() => !action.flag))
    case types.CLEAR_COMPLETED:
      return state.filter(todo => todo.get('completed') !== true)
    default:
    return state
  }
}