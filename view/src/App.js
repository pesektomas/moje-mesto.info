import React from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Subjects from './Components/Subjects';
import Transport from './Components/Transport';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-tabs/style/react-tabs.css";

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				
				<div className="container">
					<h1 className="display-4 mb-5">Pardubice</h1>

					<Tabs>
						<TabList>
							<Tab>Novinky z mého města</Tab>
							<Tab>Něco Vás štve?</Tab>
							<Tab>Doprava a parkování</Tab>
						</TabList>
 
						<TabPanel>
							<News />
						</TabPanel>
						<TabPanel>
							<Subjects />
						</TabPanel>
						<TabPanel>
							<Transport />
						</TabPanel>
					</Tabs>

				</div>

				<div>
					Footer
				</div>
			</div>
		);
	}
}

export default App;
