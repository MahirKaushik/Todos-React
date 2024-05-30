import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import Addtodo from "./components/Addtodo";


function App() {


  const onDelete = (todo) => {
    console.log('i m ondelete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo=(title,desc)=>{
    let sno=todos.length+1;
    const myTodo={
      sno:sno,  
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


  //we made an object to get all the todos

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Read the book",
      desc: 'Read the book daily at 11PM'
    },
    {
      sno: 2,
      title: "Go to gym",
      desc: 'Go to gym daily at 5:30'
    },
    {
      sno: 3,
      title: "Drink water",
      desc: 'Drink at least 2.5L per day'
    },
  ]);


  return (<>
    <div className="App">
      {/* We apply props through here as we have title and searchBar variable */}

      <Header title="My ToDos List" searchBar={true} />

      {/* we are adding a component to add new todos to our website */}



      <Addtodo addTodo={addTodo} />

      {/* now we pass our object in the Todos component of our website */}

      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  </>
  );
}

export default App;
