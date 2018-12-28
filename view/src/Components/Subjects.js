import React from 'react';
import Form from './Subjects/Form';

export default class Subjects extends React.Component {

	render() {
		return <>
			<p className="lead mt-5">Něco Vás štve? Chtěli byste něco zlepšit? Pošlete zprávu Vašim zastupitelům.</p>
			<Form />
		</>
	}

}
