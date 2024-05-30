import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import React, { useState, useEffect } from 'react';
import Addtodo from "./components/Addtodo";
import About from "./components/About"
import {
  BrowserRouter as Router,
  
  Routes,
  Route
} from "react-router-dom";





function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log('i m ondelete', todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    

  }



  

  //we made an object to get all the todos

  const [todos, setTodos] = useState(initTodo);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);


  return (
  <Router>
    <div className="App">
      {/* We apply props through here as we have title and searchBar variable */}
      <Header title="MyTodos" searchBar={true} />


      {/* switch is not currently used routes is used with elements as written */}
      
    <Routes>
      <Route exact path="/"
         
         element={
         <>
            {/* we are adding a component to add new todos to our website */}
            <Addtodo addTodo={addTodo} />
            {/* now we pass our object in the Todos component of our website */}
          <Todos todos={todos} onDelete={onDelete} />

          </>
        }/>


         <Route exact path="/About" element={<About />}/>
      
          

          
    </Routes>

    

      
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
