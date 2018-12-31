import React from 'react';
import Form from './Subjects/Form';
import DataRenderer from './Subjects/DataRenderer';
import request from 'request-promise';
import { apiUrl } from '../Helpers/ApiUrl'; 

export default class Subjects extends React.Component {

	state = {
		subjects: []
	};

	componentDidMount() {
		this.load();
	}

	load = () => {
		request({
			method: 'GET',
			uri: `${apiUrl}subject-matter/get`,
			headers: {
				privateApi: 'FhvSkMn6RWVtlrdm'
			},
			json: true
		}).then((data) => {
			this.setState({
				subjects: data.Items.map(item => ({
					...item,
					trim: true
				}))
			});
		}).catch(function (err) {
			console.log(err);
		});
	}

	setTrim = (id) => {
		this.setState(state => ({
			subjects: state.subjects.map(item => ({
				...item,
				trim: item.id === id ? !item.trim : item.trim
			}))
		}));
	}

	render() {
		return <>
			<p className="lead mt-5">Něco Vás štve? Chtěli byste něco zlepšit? Pošlete zprávu Vašim zastupitelům.</p>
			<Form loadData={this.load} />

			<h2 className="mt-3">Již vložené podměty</h2>
			<DataRenderer subjects={this.state.subjects} setTrim={this.setTrim} />
		</>
	}

}
