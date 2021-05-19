import React from 'react'

const TodoForm = () => {
    return (
        <form className='formControl'>
            <input type="text" placeholder="Enter Your Todo"></input>
            <button type="submit">Add</button>
        </form>
        
    );
}

export default TodoForm
