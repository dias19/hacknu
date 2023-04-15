import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { HomeClientPage } = lazyImport(() => import('./HomeClient'), 'HomeClientPage');
const { LoginClientPage } = lazyImport(() => import('./LoginClient'), 'LoginClientPage');
const { ServicesListPage } = lazyImport(() => import('./ServicesList'), 'ServicesListPage');
const { ServicePage } = lazyImport(() => import('./ServicePage'), 'ServicePage');

export const ClientRoutes = [
  <Route path="" element={<HomeClientPage />} key="home-client" />,
  <Route path="request/:requestId" element={<LoginClientPage />} key="requestId" />,
  <Route path="services" element={<ServicesListPage />} key="services-list-client" />,
  <Route path="services/:id" element={<ServicePage />} key="service-page" />,
];
