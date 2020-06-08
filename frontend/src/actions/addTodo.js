import axios from 'axios';
import { reset } from 'redux-form';
import * as types from '../types/addTodo';
import { tokenConfig } from './auth';

export const addTodo = formValues => async (dispatch, getState) => {
    const res = await axios.post('/api/todos/', { ...formValues }, tokenConfig(getState));
    dispatch({
      type: types.ADD_TODO,
      payload: res.data
    });
    dispatch(reset('todoForm'));
  };