import React, { Component } from 'react';

const AddTodo = ({ addTodo }) => {
    let task;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if(!task.value.trim())  return;
            const { value } = task;
            addTodo(value);
            task.value = '';
        }}>
            <div className="form-group">
                <label>Task</label>
                <input type="text" className="form-control" ref={node => { task = node}}/>
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default AddTodo