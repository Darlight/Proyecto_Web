import axios from 'axios';
import history from '../history';
import * as types from '../types/deleteTodo';
import { tokenConfig } from './auth';

export const deleteTodo = id => async (dispatch, getState) => {
    await axios.delete(`/api/todos/${id}/`, tokenConfig(getState));
    dispatch({
      type: types.DELETE_TODO,
      payload: id
    });
    history.push('/');
  };