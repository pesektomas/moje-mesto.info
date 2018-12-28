import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';

const defaultLimit = 4;

const getTitle = (stateLimit) => stateLimit === defaultLimit ? 'more ...' : 'less ...';

const trim = (title) => {
	const maxLength = 100;
	let trimmedTitle = title.substr(0, maxLength);
	
	if (title.length > trimmedTitle.length) {
		trimmedTitle = trimmedTitle.substr(0, Math.min(trimmedTitle.length, trimmedTitle.lastIndexOf(' ')));
	}
	
	return trimmedTitle + (title.length > trimmedTitle.length ? '...' : '');
}

export default class DataRenderer extends React.Component {

	state = {
		limit: defaultLimit
	}

	onMore = () => {
		this.setState((state) => ({
			limit: state.limit === defaultLimit ? this.props.data.length : defaultLimit
		}));
	}

	render() {
		return <div className="col-sm">
			<div className="card">
				<div className="card-header">
					<h4 className="my-0 font-weight-normal">{this.props.dataName}</h4>
				</div>
				<div className="card-body">
					<div className="list-group">
						{this.props.data.slice(0, this.state.limit).map((item, idx) => {
							return <a href={item.link} target="_blank" className="list-group-item list-group-item-action" key={`dataRenderer_${this.props.dataName}_${idx}`} title={item.title}>
								<div className="d-flex w-100 justify-content-between">
									<h5 className="mb-1"></h5>
									<small>
										<FormattedDate value={item.pubDate} /> <FormattedTime value={item.pubDate} />
									</small>
								</div>
								<p className="mb-1">{trim(item.title)}</p>
							</a>;
						})}
					</div>
					{ this.props.data.length > defaultLimit && <span className="more" onClick={this.onMore}>{getTitle(this.state.limit)}</span>}
				</div>
			</div>
		</div>
	}
}

DataRenderer.propTypes = {
	dataName: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
}
