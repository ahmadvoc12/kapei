import React from 'react';
import { Tab, Tabs } from 'baseui/tabs';

const MainPage = () => {
	const [activeKey, setActiveKey] = React.useState('0');
	return (
		<div className="mt-4">
			<Tabs
				onChange={({ activeKey }) => {
					setActiveKey(activeKey);
				}}
				activeKey={activeKey}
			>
				<Tab title="Kopi">Content 1</Tab>
				<Tab title="Teh">Content 2</Tab>
				<Tab title="Susu">Content 3</Tab>
			</Tabs>
		</div>
	);
};

export default MainPage;
