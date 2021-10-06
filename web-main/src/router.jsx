import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import MainLayout from './layouts/main';
import AuthLayout from './layouts/auth';

const Login = lazy(() => import('@/pages/auth/login'));
const MainPage = lazy(() => import('@/pages/main'));

const routes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: 'products',
				element: <MainPage />
			},
			{
				path: '/',
				element: <Navigate to="products" />
			}
		]
	},
	{
		path: 'auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			}
		]
	}
];

export default routes;
