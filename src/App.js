import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {

  //we made an object to get all the todos

  let todos = [
    {
      title: "Read the book",
    },
    {
      title: "Go to gym",
    },
    {
      title: "Drink water",
    },
  ];
  return (<>
    <div className="App">
      {/* We apply props through here as we have title and searchBar variable */}

      <Header title="My ToDos List" searchBar={false} />

      {/* now we pass our object in the Todos component of our website */}

      <Todos todos={todos}/>
      <Footer />
    </div>
    </>
  );
}

export default App;
