import React from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Subjects from './Components/Subjects';
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
							<p className="lead mt-5">
								Rádi bychom Vám na tomto místě zprostředkovali prvek dopravy v rámci Smart city v našem městě. Bohužel naše město není ani trochu smart.
							</p>
							<p className="lead mt-5">
								Proto jsme se pokusili kontaktovat i větší obchodní domy s prosbou o přístup k informacím o obsazenosti jejich parkovišť, bohužel, zatím bez žádné reakce.
							</p>
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
