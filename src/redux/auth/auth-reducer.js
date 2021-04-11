import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer('', {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [login.fulfilled]: (_, { payload }) => payload.user,
  [logout.fulfilled]: () => initialUserState,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [login.fulfilled]: (_, { payload }) => payload.token,
  [logout.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [register.rejected]: setError,
  [login.rejected]: setError,
});

export default combineReducers({
  user,
  token,
  error,
});
