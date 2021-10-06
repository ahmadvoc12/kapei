import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNavBar } from 'baseui/app-nav-bar';
import { Overflow } from 'baseui/icon';

import SideNav from '@/components/SideNav';
import PageLoader from '@/components/PageLoader';

const MainLayout = () => {
	return (
		<>
			<AppNavBar
				title="NekoToko POS"
				username="fiqrisr"
				usernameSubtitle="Fiqri Syah Redha"
				userItems={[
					{ icon: Overflow, label: 'Settings' },
					{ icon: Overflow, label: 'Logout' }
				]}
				onUserItemSelect={(item) => console.log(item)}
			/>
			<div className="max-w-screen-lg mx-auto">
				<div className="flex flex-row">
					<div className="p-2 mr-10 mt-10">
						<SideNav />
					</div>
					<Suspense fallback={<PageLoader />}>
						<Outlet />
					</Suspense>
				</div>
			</div>
		</>
	);
};

export default MainLayout;
