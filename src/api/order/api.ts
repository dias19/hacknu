import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

export const ORDER_API_REDUCER_KEY = 'orderApi';

const orderApi = createApi({
  reducerPath: ORDER_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://89.218.80.61/vshep-api/con-sync-service',
    credentials: 'include',
    paramsSerializer: (params) => queryString.stringify(params),
  }),

  endpoints: (builder) => ({
    getOrderDetails: builder.query<any, any>({
      query: (options) => `/?${new URLSearchParams(options.queryParams)}`,
    }),
  }),
});

export default orderApi;
