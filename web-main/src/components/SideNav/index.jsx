import React, { useState } from 'react';
import { Navigation } from 'baseui/side-navigation';
import { useNavigate } from 'react-router-dom';

const items = [
	{
		title: 'Products',
		itemId: 'products'
	},
	{
		title: 'Profile',
		itemId: 'profile'
	}
];

const SideNav = () => {
	const navigate = useNavigate();
	const [activeItemId, setActiveItemId] = useState('products');

	return (
		<Navigation
			activeItemId={activeItemId}
			items={items}
			onChange={({ event, item }) => {
				event.preventDefault();
				setActiveItemId(item.itemId);
				navigate(item.itemId);
			}}
			overrides={{
				NavItem: {
					style: {
						padding: '15px 25px'
					}
				}
			}}
		/>
	);
};

export default SideNav;
