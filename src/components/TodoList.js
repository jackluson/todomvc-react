import React from 'react'

import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, delTodo }) => {
  return(
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} 
        toggleTodo={() => toggleTodo(todo.id)}
        delTodo={()=> delTodo(todo.id)} />
      ))}
    </ul>
    )
  }
export default TodoList