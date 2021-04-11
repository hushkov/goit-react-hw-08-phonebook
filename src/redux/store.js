import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
