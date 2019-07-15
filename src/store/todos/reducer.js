import * as types from './action-type'
import Immutable from 'immutable'

const initState = [
  {
    text: 'Do todolist Demo',
    completed: false,
    id: 0
  }
]
export function todos (state = initState, action) {
  let imuDatList
  switch (action.type){
    case types.ADD_TODO:
      imuDatList = Immutable.List(state)
      const imuItem = Immutable.Map({
        text: action.text,
        completed: false,
        id: state.length > 0 ? state[state.length - 1].id + 1 : 0
      })
      imuDatList = imuDatList.push(imuItem)
      return imuDatList.toJS()
    case types.TOGGLE_TODO:
      imuDatList = Immutable.List(state)
      imuDatList = imuDatList.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
      return imuDatList.toJS()
    case types.DELETE_TODO:
      imuDatList = Immutable.List(state)
      imuDatList =  imuDatList.filter(todo =>
        todo.id !== action.id
      )
      return imuDatList.toJS()
    case types.TOGGLE_ALL:
      imuDatList = Immutable.List(state)
      imuDatList =  imuDatList.map(todo => 
          ({...todo, completed: !action.flag})
        )
      return imuDatList.toJS()
    case types.CLEAR_COMPLETED:
      imuDatList = Immutable.List(state)
      imuDatList = imuDatList.filter(todo => todo.completed !== true)
      return imuDatList.toJS()
    default:
    return state
  }
}