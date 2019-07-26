import { connect } from 'react-redux'
import { toggleTodo, delTodo } from '../store/todos/action'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  delTodo: id => dispatch(delTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)