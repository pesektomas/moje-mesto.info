import React from 'react';

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

		console.log(this.state);

		return false;
	}

	render() {
		return <form onSubmit={this.handleSubmit}>
			
			<div className="form-group row">
				<label htmlFor="subjectName" className="col-sm-2 col-form-label">Vaše jméno</label>
				<div className="col-sm-10">
					<input type="text" className="form-control" id="subjectName" rows="3" value={this.state.value} onChange={(event) => this.handleChange(event, 'name')} required />
					<small className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
			</div>
			
			<div className="form-group row">
				<label htmlFor="subjectMail" className="col-sm-2 col-form-label">Váš email</label>
				<div className="col-sm-10">
					<input type="email" className="form-control" id="subjectMail" rows="3" value={this.state.value} onChange={(event) => this.handleChange(event, 'email')} required />
					<small className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="subjectMessage">Vaše zpráva</label>
				<textarea className="form-control" id="subjectMessage" rows="3" value={this.state.value} onChange={(event) => this.handleChange(event, 'message')} required ></textarea>
				<small className="form-text text-muted">We'll never share your email with anyone else.</small>
			</div>


			<input type="submit" value="Submit" />
		</form>
	}

}
