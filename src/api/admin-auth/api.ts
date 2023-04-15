import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '..';
import {
  SendRequest, SendResponse, ConfirmRequest, ConfirmResponse,
} from './types';

export const ADMIN_AUTH_API_REDUCER_KEY = 'adminAuthApi';

const adminAuthApi = createApi({
  reducerPath: ADMIN_AUTH_API_REDUCER_KEY,
  baseQuery,
  endpoints: (builder) => ({
    sendVerification: builder.mutation<SendResponse, SendRequest>({
      query: (credentials) => ({
        url: '/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    confirmVerification: builder.mutation<ConfirmResponse, ConfirmRequest>({
      query: (credentials) => ({
        url: '/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export default adminAuthApi;
