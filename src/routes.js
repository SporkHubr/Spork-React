import { lazy } from 'react';
import MainLayout from './layouts/Main';

const routes = [
  {
    route: '*',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('views/Main')),
      },
    ],
  },
];

export default routes;
