import axios from 'axios';
import * as types from '../types/getTodos';
import { tokenConfig } from './auth';

export const getTodos = () => async (dispatch, getState) => {
    const res = await axios.get('/api/todos/', tokenConfig(getState));
    dispatch({
      type: types.GET_TODOS,
      payload: res.data
    });
  };
  
  export const getTodo = id => async (dispatch, getState) => {
    const res = await axios.get(`/api/todos/${id}/`, tokenConfig(getState));
    dispatch({
      type: types.GET_TODO,
      payload: res.data
    });
  };
  