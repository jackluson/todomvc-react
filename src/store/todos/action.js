import * as types from './action-type'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id })
export const delTodo = id => ({ type: types.DELETE_TODO, id })
export const toggleAll = (flag) => ({ type: types.TOGGLE_ALL, flag})
export const clearCompleted= () =>({ type:types.CLEAR_COMPLETED})
