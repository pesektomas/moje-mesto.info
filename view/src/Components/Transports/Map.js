import React from 'react';
import GoogleMap from 'google-map-react';
import styled from 'react-emotion'

import { Pardubice } from '../../cities/Pardubice';

const MapWrapper = styled.div`
	height: 500px;
`;

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
			</GoogleMap>
		</MapWrapper>;
	}
}