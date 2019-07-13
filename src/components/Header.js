import React from 'react'

const Header = ({todosCount,completedCount,addTodo,toggleAll}) => {
  function getEvtTarget(evt){
    const val = evt.target.value.trim()
    val && addTodo(val)
    evt.target.value = ''
  }
  return (
    <header>
    <h1>todos</h1>
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={() => toggleAll(completedCount === todosCount)} />
        </span>
      }
      <input
        className="new-todo"
        placeholder="please input!"
        autoFocus={true}
        onKeyDown={e => {
          if(e.keyCode === 13){
            getEvtTarget(e)
          }
        }}
      />
    </header>
  )
}
export default Header