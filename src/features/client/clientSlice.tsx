import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import clientApi from '~/api/client/api';

interface ClientState {
    isLoggedIn: boolean;
    token:string;
  }
const initialState: ClientState = {
  token: '',
  isLoggedIn: false,
};

export const clientSlice = createSlice({
  name: 'clientSlice',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      clientApi.endpoints.sendVerificationCode.matchFulfilled,
      (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
      },
    );
  },
});

export const { logout } = clientSlice.actions;

export const clientReducer = persistReducer(
  {
    key: 'rtk:auth',
    storage,
    whitelist: ['token', 'isLoggedIn'],
  },
  clientSlice.reducer,
);
