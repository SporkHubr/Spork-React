/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import MainLayout from './layouts/Main';

const routes = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('views/Main'))
      }
    ]
  },
];

export default routes;
