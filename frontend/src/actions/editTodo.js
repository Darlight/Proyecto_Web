import axios from 'axios';
import history from '../history';
import * as types from '../types/editTodo';
import { tokenConfig } from './auth';

export const editTodo = (id, formValues) => async (dispatch, getState) => {
    const res = await axios.patch(`/api/todos/${id}/`, formValues, tokenConfig(getState));
    dispatch({
      type: types.EDIT_TODO,
      payload: res.data
    });
    history.push('/');
  };