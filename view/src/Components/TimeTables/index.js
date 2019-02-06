import React from 'react';

const iframeSrc = '<iframe src="https://www.seznam.cz/jizdnirady/" width="100%" height="900" frameBorder="0"></iframe>';

export default class TimeTables extends React.Component {

	iframe () {
		return {
			__html: iframeSrc
		}
	}
		
	render() {
		return <>
			<div dangerouslySetInnerHTML={ this.iframe() } />
		</>
	}

}
