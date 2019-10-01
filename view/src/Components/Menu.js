import React from 'react';
import { styled } from 'styletron-react';

const Content = styled('div', { 
	width: '1045px',
	height: '100%', 
	position: 'absolute',
	left: 0,
	right: 0,
	margin: '0 auto',
	background: 'rgba(33, 108, 118, 0.9)',
	zIndex: 1,
	"@media (max-width: 1044px)": {
		width: '100%'
	} 
});

const List = styled('ul', { 
	width: '100%',
	listStyle: 'none',
	padding: '25px'
});

const ListItem = styled('li', { 
	width: '100%',
	fontSize: '240%',
	color: '#fff',
	marginBottom: '10px',
	textAlign: 'center'
});

const Link = styled('a', {
	color: '#fff',
	textDecoration: 'none',
	borderBottom: '1px solid #fff',
	':hover': {
		color: '#ffff00',
		textDecoration: 'none',
	}
});

export default class Menu extends React.Component {
	render() {
		return <Content>
			<List>
				<ListItem>
					<Link href="#news" onClick={() => this.props.changeContent('news')}>
						Novinky z mého města
					</Link>
				</ListItem>
				<ListItem>
					<Link href="#time-tables" onClick={() => this.props.changeContent('time-tables')}>
						Jízdní řády
					</Link>
				</ListItem>
				<ListItem>
					<Link href="#traffic" onClick={() => this.props.changeContent('traffic')}>
						Doprava
					</Link>
				</ListItem>
			</List>
		</Content>;
	}
}
