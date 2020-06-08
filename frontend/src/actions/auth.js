import axios from 'axios';
import { stopSubmit } from 'redux-form';

import * as types from '../types/auth';

export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get('/api/auth/user', tokenConfig(getState));
    dispatch({
      type: types.USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.AUTH_ERROR
    });
  }
};

export const login = ({ username, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAIL
    });
    dispatch(stopSubmit('loginForm', err.response.data));
  }
};

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

export const logout = () => async (dispatch, getState) => {
  await axios.post('/api/auth/logout', null, tokenConfig(getState));
  dispatch({
    type: types.LOGOUT_SUCCESS
  });
};

export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/auth/register', body, config);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.REGISTER_FAIL
    });
    dispatch(stopSubmit('registerForm', err.response.data));
  }
};