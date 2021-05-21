import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    if(todo!==''){
      setTodos([{id:'${todo}--${Date.now()}',todo},...todos]);
    }
  };
  const deleteHandler=()=>{

  };

return (
  <div className="App">
   <div className="container">
    <h1>Todo List Application</h1>
    <TodoForm submitHandler={submitHandler}
     todo={todo} setTodo={setTodo}/>
    <TodoList todos={todos} deleteHandler={deleteHandler}/>
   </div>
  </div>
  );
}
export default App;
