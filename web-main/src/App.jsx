import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import routes from './router';

const engine = new Styletron();

const App = () => {
	const routing = useRoutes(routes);

	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<Helmet
					titleTemplate="%s | NekoToko POS"
					defaultTitle="NekoToko Admin"
				/>
				{routing}
			</BaseProvider>
		</StyletronProvider>
	);
};

export default App;
