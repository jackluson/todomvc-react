
import { createSelector } from 'reselect'
import { SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED } from '../store/visible-filter/action-type'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter,getTodos],
  (filter,todos) =>{
    switch (filter) {
      case SHOW_COMPLETED:
        return todos.filter(todo => todo.get('completed'))
      case SHOW_ACTIVE:
        return todos.filter(todo => !todo.get('completed'))
      case SHOW_ALL:
      default:
        return todos
    }
  }
)