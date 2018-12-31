import React from 'react';
import request from 'request-promise';
import { apiUrl } from '../../Helpers/ApiUrl'; 

export default class Subjects extends React.Component {

	state = {
		name: '',
		email: '',
		message: ''
	}

	handleChange = (event, name) => {
		const newState = { ...this.state };
		newState[name] = event.target.value;
		this.setState(newState);
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		request({
			method: 'POST',
			uri: `${apiUrl}subject-matter/send`,
			headers: {
				privateApi: 'FhvSkMn6RWVtlrdm'
			},
			body: {
				...this.state
			},
			json: true
		}).then(() => {
			this.setState({
				name: '',
				email: '',
				message: ''
			});
			this.props.loadData();
			return null;
		}).catch(function (err) {
			console.log(err);
		});
	}

	render() {
		return <form onSubmit={this.handleSubmit}>
			
			<div className="form-group row">
				<label htmlFor="subjectName" className="col-sm-2 col-form-label">Vaše jméno</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="subjectName" rows="3" value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} required />
					<small className="form-text text-muted">I když Vás něco štve, tak podpis je známkou slušnosti.</small>
				</div>
			</div>
			
			<div className="form-group row">
				<label htmlFor="subjectMail" className="col-sm-2 col-form-label">Váš email</label>
				<div className="col-sm-10">
					<input type="email" className="form-control" id="subjectMail" rows="3" value={this.state.email} onChange={(event) => this.handleChange(event, 'email')} required />
					<small className="form-text text-muted">Váš e-mail není nikde uložen, slouží jen pro komunikaci mezí Vámi a zastupiteli.</small>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="subjectMessage">Vaše zpráva</label>
				<textarea className="form-control" id="subjectMessage" rows="3" value={this.state.message} onChange={(event) => this.handleChange(event, 'message')} required >{this.state.message}</textarea>
				<small className="form-text text-muted">Vyvarujte se prosím vulgarismům.</small>
			</div>


			<input type="submit" value="Submit" />
		</form>
	}

}
