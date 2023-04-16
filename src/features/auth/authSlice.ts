import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authApi from '~/api/admin-auth/api';

import type { AuthState } from './types';

const initialState: AuthState = {
  role: '',
  isLoggedIn: false,
  verificationCode: '',

};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      state.role = '';
      state.isLoggedIn = false;
      state.verificationCode = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.sendVerification.matchFulfilled,
      (state, { payload }) => {
        state.verificationCode = payload.verificationId.toString();
      },
    );
    builder.addMatcher(
      authApi.endpoints.confirmVerification.matchFulfilled,
      (state, { payload }) => {
        state.isLoggedIn = true;
        state.role = `${payload.user.lastName}1`;
      },
    );
  },
});

export const { logout } = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'rtk:auth',
    storage,
    whitelist: ['user', 'isLoggedIn'],
  },
  authSlice.reducer,
);
