import React from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Subjects from './Components/Subjects';
import Transport from './Components/Transports';
import TimeTables from './Components/TimeTables'
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
							<Tab>Jízdní řády</Tab>
							<Tab>Doprava a parkování</Tab>
							<Tab>Něco Vás štve?</Tab>
						</TabList>
 
						<TabPanel>
							<News />
						</TabPanel>
						<TabPanel>
							<TimeTables />
						</TabPanel>
						<TabPanel>
							<Transport />
						</TabPanel>
						<TabPanel>
							<Subjects />
						</TabPanel>
					</Tabs>

				</div>
			</div>
		);
	}
}

export default App;
