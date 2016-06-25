import React, { PropTypes } from 'react';

const TodoList = ({ todos }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th width="25%">ID</th>
                <th>Task Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { todos.map(todo =>
                <tr key={ todo.id }>
                    <td>{ todo.id }</td>
                    <td>{ todo.text }</td>
                    <td>
                        <a href="" className="btn btn-xs btn-danger">Complete</a>
                    </td>
                </tr>
            )}
            
        </tbody>
    </table>
)

export default TodoList
