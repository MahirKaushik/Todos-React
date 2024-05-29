import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">


      {/* We apply props through here as we have title and searchBar variable */}

      
      <Header title="My ToDos List"  searchBar={true}/>
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
