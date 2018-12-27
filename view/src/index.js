import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs.js';
import ReactGA from 'react-ga';

addLocaleData(cs);

ReactDOM.render(
	<IntlProvider locale="cs" timeZone="Europe/Prague">
		<App />
	</IntlProvider>, 
	document.getElementById('root')
);

ReactGA.initialize('UA-131438663-1');
ReactGA.pageview(window.location.pathname + window.location.search);