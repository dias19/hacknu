import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { API_URL } from '~/config';
import { logout } from '~/features/auth';
import { AppState } from '~/store';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      clientSlice: { token },
    } = getState() as AppState;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithLogout: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  const isError = !!result.error;

  const isAuthError = isError && result.error.status === 401;
  // rtk query returns parsing_error when response is just string
  const isParsingAuthError = isError
    && result.error.status === 'PARSING_ERROR'
    && result.error.originalStatus === 401;

  if (isParsingAuthError || isAuthError) {
    api.dispatch(logout());
  }
  return result;
};
