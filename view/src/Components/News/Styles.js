import { styled } from 'styletron-react';

export const Container = styled('div', { 
	display: 'flex', 
	width: '100%', 
	background: 'rgba(33, 108, 118, .04)'
});

export const Data = styled('div', { 
	width: '100%',
	padding: '0 10px',
	"@media (min-width: 700px)": {
		minWidth: '700px',
	} 
});

export const Settings = styled('div', { 
	height: '100%', 
	width: '355px', 
	padding: '5px 0px 0px 10px', 
	marginTop: '15px',
	"@media (max-width: 800px)": {
		display: 'none'
	} 
});

export const SettingPath = styled('div', { 
	fontSize: '16px', 
	color: '#575757', 
	marginTop: '20px', 
	paddingLeft: '25px' 
});

export const SettingTitle = styled('div', { 
	paddingBottom: '15px' 
});

export const SettingSubPath = styled('div', { 
	fontSize: '12px', 
	padding: '0 0 10px 10px', 
	cursor: 'pointer', 
});

export const FilterTitle = styled('div', { 
	fontSize: '16px', 
	color: '#575757', 
	paddingLeft: '25px' 
});

export const Flex = styled('div', {
	display: 'flex'
});

export const PostLink = styled('a', {
	display: 'block',
	color: '#000',
	backgroundColor: '#fff',
	padding: '15px',
	marginTop: '15px',
	':hover': {
		textDecoration: 'none',
		color: '#000'
	}
});

export const DateTime = styled('div', {
	flex: '50%'
});

export const DataName = styled('div', {
	flex: '50%',
	textAlign: 'right'
});

export const activeFilter = { 
	color: '#000000' 
};

export const inactiveFilter = { 
	color: '#575757', 
	textDecoration: 'line-through' 
};

export const PostData = styled('div', {
	color: '#000'
});

export const ResponsiveImage = styled('img', {
	width: '100%',
	maxWidth: '500px',
	height: 'auto'
});

export const DataImage = styled('div', {
	width: '100%',
	padding: '20px',
	textAlign: 'center'
});
