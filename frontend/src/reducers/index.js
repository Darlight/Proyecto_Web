
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addTodo from './addTodo';
import deleteTodo from './deleteTodo';
import editTodo from './editTodo';
import getTodos from './getTodos';
import auth from './auth';
import * as types from '../types/auth';

const appReducer = combineReducers({
  form: formReducer,
  addTodo,
  deleteTodo,
  editTodo,
  getTodos,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;