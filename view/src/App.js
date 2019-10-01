import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import News from './Components/News';
import Transport from './Components/Transports';
import TimeTables from './Components/TimeTables'
import { styled } from 'styletron-react';

import 'bootstrap/dist/css/bootstrap.min.css';

const MyCity = styled('div', { fontSize: '16px' });

const Container = styled('div', { 
	width: '1045px', 
	margin: '0 auto', 
	background: 'rgba(33, 108, 118, .04)', 
	"@media (max-width: 1044px)": {
		width: '100%'
	} 
});

class App extends React.Component {

	state = {
		isMenuOpen: false,
		content: 'news'
	}

	menuClick = () => {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen
		}));
	}

	changeContent = (content) => {
		this.setState(state => ({
			...state,
			isMenuOpen: false,
			content
		}));
	}

	render() {
		return (
			<MyCity>
				<Header isMenuOpen={this.state.isMenuOpen} menuClick={this.menuClick} />
				
				{this.state.isMenuOpen && <Menu changeContent={this.changeContent} />}

				<Container>
					{this.state.content === 'news' && <News />}
					{this.state.content === 'time-tables' && <TimeTables />}
					{this.state.content === 'traffic' && <Transport />}
					{/* <Subjects /> */}
				</Container>
			</MyCity>
		);
	}
}

export default App;
