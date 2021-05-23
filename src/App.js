import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {useState} from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const submitHandler=(e)=>{
    e.preventDefault();

    if(editId){
      const editTodo = todos.find((i) => i.id===editId);
      const updatedTodo = todos.map((t)=> t.id === editTodo.id ? (t={id:t.id, todo})
        :({id: t.id, todo:t.todo}));
        setTodos(updatedTodo);
        setTodo('');
        setEditId(0);

        return;
    }
  

    if(todo!==''){
      // eslint-disable-next-line
      setTodos([{id:`${todo}--${Date.now()}`,todo},...todos]);
    }
    setTodo('');//To make the field empty after adding
  };
  const deleteHandler = (id) => {
     const deletedTodo= todos.filter((t) => t.id !== id);
     setTodos([...deletedTodo]);
  };
  const editHandler = (id) => {
    const editTodo = todos.find((i) => i.id===id);
    setTodo(editTodo.todo);
    setEditId(editTodo.id);
  };
return (
  <div className="App">
   <div className="container">
    <h1>Todo List Application</h1>
    <TodoForm submitHandler={submitHandler}
     todo={todo} setTodo={setTodo} editId={editId}/>
    <TodoList todos={todos} deleteHandler={deleteHandler} editHandler={editHandler}/>
   </div>
  </div>
  );
}
export default App;
