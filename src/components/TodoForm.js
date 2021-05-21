import React from 'react'

const TodoForm = ({submitHandler,todo,setTodo}) => {
    return (
        <form className='formControl'
        onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Your Todo" value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        
    );
}

export default TodoForm
