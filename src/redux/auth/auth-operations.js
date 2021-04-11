import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
});

export const login = createAsyncThunk('auth/login', async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async token => {
  const { data } = await axios.post('/users/logout', token);
  token.unset();
  return data;
});
