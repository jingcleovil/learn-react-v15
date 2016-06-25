import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { todos } from './todo/reducers';

const app = combineReducers({
    routing: routerReducer,
    todos
})

export default app;