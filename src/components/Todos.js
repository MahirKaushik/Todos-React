import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <>
      <div className='todos-head'>
      <p>Todos List</p>
      </div>
      {/* the todos object we passed in there will be used here in which we pass oth element of our array in Todo component */}

    <div className="todos">
    <Todo todo={props.todos[0]}/>
    </div>
      
      

    </>

  )
}
