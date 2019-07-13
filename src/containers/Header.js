import { connect } from 'react-redux'
import Header from '../components/Header'
import {addTodo,toggleAll} from '../store/todos/action'
import {getCompletedCount} from '../utils'

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedCount(state.todos)
})
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleAll: (flag) => dispatch(toggleAll(flag))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)