import React from 'react';
import { SnackbarElement } from 'baseui/snackbar';

const PageLoader = () => {
	return (
		<div className="fixed top-0 left-0 h-full w-full flex justify-center">
			<div className="z-10 mt-6">
				<SnackbarElement message="Loading" progress />
			</div>
		</div>
	);
};

export default PageLoader;
