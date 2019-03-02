import React from 'react';
import Header from './Components/Header';
import News from './Components/News';
import Subjects from './Components/Subjects';
import Transport from './Components/Transports';
import TimeTables from './Components/TimeTables'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-tabs/style/react-tabs.css";

import { styled } from 'styletron-react';

const Container = styled('div', { width: '845px', margin: '0 auto', background: 'rgba(33, 108, 118, .04)', paddingTop: '10px' });
const tabCommon = { border: '0px', borderRadius: 0, fontSize: '14px', padding: '10px 20px', marginRight: '10px' };
const tabStyle = { ...tabCommon, background: '#216c76', color: '#fff' };
const activeTabStyle = { ...tabCommon, background: '#fff', color: '#000' };
const tabPanelStyle = { background: '#fff' }


class App extends React.Component {

	state = {
		activeTab: 0
	}

	tabHandler = (index, lastIndex, event) => {
		this.setState({ activeTab: index });
	}

	render() {
		return (
			<div>
				<Header />
				
				<Container>

					<Tabs style={{ margin: '0px 15px' }} onSelect={this.tabHandler}>
						<TabList style={{ padding: '10px 0', border: '0px' }}>
							<Tab style={ this.state.activeTab === 0 ? activeTabStyle : tabStyle }>Novinky z mého města</Tab>
							<Tab style={ this.state.activeTab === 1 ? activeTabStyle : tabStyle }>Jízdní řády</Tab>
							<Tab style={ this.state.activeTab === 2 ? activeTabStyle : tabStyle }>Doprava a parkování</Tab>
							<Tab style={ this.state.activeTab === 3 ? activeTabStyle : tabStyle }>Něco Vás štve?</Tab>
						</TabList>
 
						<TabPanel style={ tabPanelStyle }>
							<News />
						</TabPanel>
						<TabPanel style={ tabPanelStyle }>
							<TimeTables />
						</TabPanel>
						<TabPanel style={ tabPanelStyle }>
							<Transport />
						</TabPanel>
						<TabPanel style={ tabPanelStyle }>
							<Subjects />
						</TabPanel>
					</Tabs>

				</Container>
			</div>
		);
	}
}

export default App;
