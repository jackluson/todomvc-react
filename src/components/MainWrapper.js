import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainWrapper = ({props,setVisibilityFilter}) => {
  setVisibilityFilter(props.match.path.slice(1))
  return(
    <section className="main">
      <VisibleTodoList />
    </section>
  )
}
export default MainWrapper