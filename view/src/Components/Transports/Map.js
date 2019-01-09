import React from 'react';
import GoogleMap from 'google-map-react';
import styled from 'react-emotion'

import { Pardubice } from '../../cities/Pardubice';

const chargingStation = require('./chargin_station.png');

const MapWrapper = styled.div`
	height: 500px;
`;

const AnyReactComponent = ({ text }) => (
	<div style={{
		color: 'white', 
		background: 'grey',
		padding: '5px',
		display: 'inline-flex',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		transform: 'translate(-50%, -50%)',
		opacity: 0.7
	}}>
		<img src={chargingStation} alt='chargin station' width="24" />
		{text}
	</div>
);

export default class Map extends React.Component {
	render() {
		return <MapWrapper>
			<GoogleMap
				bootstrapURLKeys={{
					key: 'AIzaSyBbO3MH_m5QH5gRADBrP3RK2J463E1PKS4'
				}}
				center={Pardubice.map.center}
				zoom={14}
				layerTypes={ ['TrafficLayer', 'TransitLayer'] }>

				{Pardubice.map.chargingstations.map((chs, idx) => <AnyReactComponent key={`chs_${idx}`} {...chs} />)}

			</GoogleMap>
		</MapWrapper>;
	}
}