import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from './VisibleTodoList';

const Todo = ({ addTodo }) => (
	<div className="panel panel-default">
		<div className="panel-heading">Todo Task</div>
		<div className="panel-body">
			<AddTodo addTodo={ addTodo }/>
			<br/>
			<VisibleTodoList/>
		</div>
	</div>
)

export default connect(
	state => {
		const { todos } = state.todos;

		return {
            todos
		}
	},
	actions
)(Todo)