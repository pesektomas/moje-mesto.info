import React from 'react';
import Map from './Map'

export default class Transport extends React.Component {

	render() {
		return <>
			<p className="lead mt-5">
				Rádi bychom Vám na tomto místě zprostředkovali prvek dopravy v rámci Smart city v našem městě. Bohužel naše město není ani trochu smart, proto se zde můžete kouknout alespoň na dopravní situaci podle Googlu.
			</p>

			<Map />

			<p className="lead mt-5">
				Pokusili jsme se kontaktovat i větší obchodní domy s prosbou o přístup k informacím o obsazenosti jejich parkovišť, bohužel, zatím bez žádné reakce.
			</p>
		</>
	}

}
