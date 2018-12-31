import React from 'react';
import trim from '../../Helpers/trim';
import styled from 'react-emotion'

const Message = styled.span`
	cursor: pointer;
`;

export default class DataRenderer extends React.Component {

	render() {

		return <table className="table table-striped table-hover">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Zpráva</th>
					<th scope="col">Status</th>
				</tr>
			</thead>
			<tbody>
				{this.props.subjects.map((item, idx) => {
					return <tr key={idx}>
						<th scope="row">{(idx+1)}</th>
						<td><Message onClick={() => this.props.setTrim(item.id)}>{item.trim ? trim(item.message) : item.message}</Message></td>
						<td>Odesláno</td>
					</tr>
				})}
			</tbody>
		</table>
	}

}
