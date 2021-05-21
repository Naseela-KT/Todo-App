import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState(initialState)
  const submitHandler=(e)=>{
    e.preventDefault();
  };
return (
  <div className="App">
   <div className="container">
    <h1>Todo List Application</h1>
    <TodoForm submitHandler={submitHandler}
     todo={todo} setTodo={setTodo}/>
    <TodoList />
   </div>
  </div>
  );
}
export default App;
