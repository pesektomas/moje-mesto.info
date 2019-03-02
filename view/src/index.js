import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs.js';
import ReactGA from 'react-ga';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

addLocaleData(cs);

const engine = new Styletron();

ReactDOM.render(
	<IntlProvider locale="cs" timeZone="Europe/Prague">
		<StyletronProvider value={engine}>
			<App />
		</StyletronProvider>
	</IntlProvider>, 
	document.getElementById('root')
);

ReactGA.initialize('UA-131438663-1');
ReactGA.pageview(window.location.pathname + window.location.search);