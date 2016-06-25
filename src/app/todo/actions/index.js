import * as c from '../constants';
import { v4 } from 'node-uuid';

export const addTodo = (task) => ({
    type: c.ADD_TODO,
    id: v4(),
    task
})