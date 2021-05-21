import React from 'react'

const TodoList = ({todos,deleteHandler}) => {
    return (
        <ul className="listControl">
            {
                todos.map((t)=>(
                    <li className="listItem" key={t.id}>
                    <span className="listTitle">{t.todo}</span>
                    <button>Edit</button>
                    <button onClick={() => deleteHandler(t.id)}>Delete</button>
                  </li>
                ))
            }
            
        </ul>
    );
}

export default TodoList
