import React from 'react'
import './Todos.css'

export default function Todo(props) {
  return (
    <div>

      {/* here we use the todo passed earlier which was oth object of the array and use its title  */}


      <h4>{props.todo.title}</h4>
      <button className='btn btn-sm btn-danger' >Delete</button>
    </div>
  )
}
