import React, { PropTypes } from 'react';

const TodoList = ({ todos }) => (
    <ul className="list-group">
        { todos.map(todo => 
            <li key={ todo.id } className="list-group-item">
                <a href="">{ todo.text }</a>
            </li>
        )}
    </ul>
)

export default TodoList
