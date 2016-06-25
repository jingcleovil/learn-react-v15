import * as c from '../constants';

const todo = (state, action) => {
    switch(action.type) {
        case c.ADD_TODO:
            return {
                id: action.id,
                text: action.task,
                completed: false
            }
        default: 
            return state;
    }
}

export const todos = (state = c.INIT_STATE, action) => {
	switch(action.type) {
        case c.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    todo(undefined, action)
                ]
            })
        default:
            return state;
    }
	return state;
}



