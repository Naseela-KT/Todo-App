import React from 'react'

const TodoList = () => {
    return (
        <ul className="listControl">
            <li className="listItem">
              <span className="listTitle">Buy Mangoes</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
        </ul>
    );
}

export default TodoList
