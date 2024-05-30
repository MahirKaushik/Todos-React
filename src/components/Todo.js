import React from 'react'
import './Todos.css'

export default function Todo(props) {
  return (
    <>
    <div className='bigb'>

      {/* here we use the todo passed earlier which was oth object of the array and use its title  */}

      <h4>{props.todo.sno}. {props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button id='space' className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      
    </div>
    
    
    </>
  )
}
