import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GameContextProvider } from './store/game-context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GameContextProvider>
			<App />
		</GameContextProvider>
	</React.StrictMode>
);
