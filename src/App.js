import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <div className='h-screen bg-slate-500 text-center'>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
