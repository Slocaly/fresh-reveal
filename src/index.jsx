import '@sass/core/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Reveal from 'reveal.js';

import App from './App';

const deck = new Reveal({
	plugins: [],
});

deck.initialize();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
