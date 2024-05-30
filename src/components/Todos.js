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
      {props.todos.length===0?"No todos are present":props.todos.map((todo)=>{
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>})}
      
   
    </div>
      
      

    </>

  )
}
