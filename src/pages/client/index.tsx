import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { HomeClient } = lazyImport(() => import('./HomeClient'), 'HomeClient');

export const ClientRoutes = [
  <Route path="/requestID=:id" element={<HomeClient />} key="login" />,
];
