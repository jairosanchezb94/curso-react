import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
  return (
    <li 
        key={todo.id}
            className="list-group-item"
    >
        <p 
            className={`${todo.done && 'completed'}`}
            oneClick={() => handleToggle(todo.id)}
        >{todo.desc}</p>
        <button 
            className="btn btn-danger"
            oneClick={() => handleDelete(todo.id)}
        >
        Delete
        </button>
    </li>
  )
}
