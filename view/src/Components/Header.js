import React from 'react';
import { styled } from 'styletron-react';
import logo from './logo.png';
import HamburgerMenu from 'react-hamburger-menu';

const Header = styled('div', { 
	background: '#216c76', 
	width: '100%', 
	height: '60px' 
});

const Top = styled('div', { 
	display: 'flex',
	justifyContent: 'space-between',
	width: '1045px', 
	margin: '0 auto', 
	padding: '5px 15px', 
	"@media (max-width: 1044px)": {
		width: '100%'
	} 
});

const RightIcons = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
});

const City = styled('div', { 
	width: '250px', 
	border: '2px solid #fff', 
	color: '#fff', 
	margin: '5px 0 0 15px', 
	padding: '3px 0 0 15px', 
	fontSize: '24px', 
	textAlign: 'left',
	"@media (max-width: 475px)": {
		display: 'none'
	} 
});

const MenuWrapper = styled('div', { 
	margin: '13px 0 0 10px',
	cursor: 'pointer'
});

export default class App extends React.Component {

	constructor() {
		super();
	}

	render() {
		return <Header>
			<Top>
				<img src={logo} alt="moje-meto.info" />
				<RightIcons>
					<City>Pardubice</City>
					<MenuWrapper>
						<HamburgerMenu
							isOpen={this.props.isMenuOpen}
							menuClicked={this.props.menuClick}
							width={30}
							height={24}
							strokeWidth={2}
							rotate={0}
							color='white'
							borderRadius={0}
							animationDuration={0.5}
						/>
					</MenuWrapper>
				</RightIcons>
			</Top>
			
		</Header>;
	}
}
