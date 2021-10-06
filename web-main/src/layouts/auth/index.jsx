import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PageLoader from '@/components/PageLoader';

const AuthLayout = () => {
	return (
		<>
			<Suspense fallback={<PageLoader />}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default AuthLayout;
