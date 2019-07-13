import * as types from './action-type'

const initState = [
  {
    text: 'Do todolist Demo',
    completed: false,
    id: 0
  }
]
export function todos (state = initState, action) {
  switch (action.type){
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.length > 0 ? state[state.length - 1].id + 1 : 0
        }
      ]
    case types.TOGGLE_TODO:
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
    case types.DELETE_TODO:
        return state.filter(todo =>
          todo.id !== action.id
        )
    case types.TOGGLE_ALL:
        return state.map(todo => 
          ({...todo, completed: !action.flag})
        )
    case types.CLEAR_COMPLETED:
        return state.filter(todo => todo.completed !== true)
    default:
    return state
  }
}