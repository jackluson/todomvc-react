import React from 'react'

export default function TodoItem (todo) {
  // render(){
    // const {todo} = this.props
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input className="toggle"
           type="checkbox" 
           checked={todo.completed}
           onChange={()=> todo.toggleTodo()} />
           <label>{todo.text}</label>
           <button className="destroy" 
           onClick={()=> todo.delTodo()} />
        </div>
      </li>
    )
  // }
}