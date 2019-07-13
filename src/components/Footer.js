import React from 'react'
import { connect } from 'react-redux'
import * as types from '../store/visible-filter/action-type'

import { clearCompleted } from '../store/todos/action'
import { Link } from 'react-router-dom'
import { getCompletedCount } from '../utils'
var { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = types
const showList = [ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ]
const Footer = ({activeCount,completedCount,filterVal,showList,setVisibilityFilter,clearCompleted}) => {
  return (
    <footer className="footer" >
      <span className="todo-count"> <em>{activeCount}</em> item{activeCount > 1 && 's'} left</span>
      <ul className="filters" >
        {showList.map((filterItem,index) =>(
          <li key={index}>
            <Link className={filterItem === filterVal ? 'selected' : ''} to={'/' + filterItem}>
              {filterItem.slice(5)[0] + filterItem.slice(6).toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
      {
        !!completedCount && <button className="clear-completed" onClick={() => clearCompleted()}>Clear completed</button>
      }
    </footer>
  )
}
const mapStateToProps = (state) => ({
  activeCount:  state.todos.length - getCompletedCount(state.todos),
  completedCount: getCompletedCount(state.todos),
  filterVal: state.visibilityFilter,
  showList: showList
})
const mapDispatchToProps = (dispatch) => ({
  clearCompleted: () => dispatch(clearCompleted())
})
export default connect(mapStateToProps,mapDispatchToProps)(Footer)
