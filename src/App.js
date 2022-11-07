import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Header from './components/Header';
import TodoBody from './components/TodoBody';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Add/>
      <Delete/>
     
    </div>
  );
}

export default App;
