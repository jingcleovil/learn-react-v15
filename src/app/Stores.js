import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducer,{});

    store.subscribe(() => {
   
        //console.log(store.getState())
    })

    return store;
}