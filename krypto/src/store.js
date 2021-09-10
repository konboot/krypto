import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import reducer from './reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    reducer,
    form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
