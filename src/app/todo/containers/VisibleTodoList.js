import { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const VisibilityTodoList = connect(
    state => {
        const { todos } = state.todos;
        return {
            todos
        }
    },
    dispatch => {
        return {}
    }
)(TodoList);

export default VisibilityTodoList;