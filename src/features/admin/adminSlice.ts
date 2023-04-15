import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authApi from '~/api/admin-auth/api';

import type { AdminAuthSliceType } from './types';

const initialState: AdminAuthSliceType = {
  user: null,
  isLoggedIn: false,
  verificationCode: '',
};

export const adminAuthSlice = createSlice({
  name: 'adminAuthSlice',
  initialState,
  reducers: {
    adminLogout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.verificationCode = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.sendVerification.matchFulfilled,
      (state, { payload }) => {
        state.verificationCode = payload.verificationNumber;
      },
    );
    builder.addMatcher(
      authApi.endpoints.confirmVerification.matchFulfilled,
      (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = { role: payload.role };
      },
    );
  },
});

export const { adminLogout } = adminAuthSlice.actions;

export const adminAuthReducer = persistReducer(
  {
    key: 'rtk:adminAuth',
    storage,
    whitelist: ['admin', 'isLoggedIn'],
  },
  adminAuthSlice.reducer,
);
