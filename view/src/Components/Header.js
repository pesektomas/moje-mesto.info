import React from 'react';
import { styled } from 'styletron-react';
import logo from './logo.png';

const Header = styled('div', { background: '#216c76', width: '100%', height: '60px' });
const Top = styled('div', { width: '845px', margin: '0 auto', paddingTop: '5px' });
const Info = styled('div', { width: '40px', height: '40px', border: '2px solid #fff', color: '#fff', float: 'right', marginTop: '5px', fontSize: '24px', fontWeight: 700, textAlign: 'center' })
const City = styled('div', { width: '250px', border: '2px solid #fff', color: '#fff', float: 'right', margin: '5px 0 0 15px', padding: '0 0 0 15px', fontSize: '24px', textAlign: 'left' })

export default class App extends React.Component {

	render() {
		return <Header>
			<Top>
				<img src={logo} alt="moje-meto.info" />
				<City>Pardubice</City>
				<Info>i</Info>
			</Top>
		</Header>
	}

}
