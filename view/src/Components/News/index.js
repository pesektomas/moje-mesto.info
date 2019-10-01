import React from 'react';
import DataRenderer from './DataRenderer';
import { Pardubice } from '../../cities/Pardubice';
import renderSvg from './renderSvg.js';

import { Container, Data, Settings, SettingPath, SettingTitle, SettingSubPath, FilterTitle, activeFilter, inactiveFilter } from './Styles';

const getActiveFilter = (filters) => {
	const activeFilters = [];
	Object.keys(filters).forEach(baseFilter => {
		filters[baseFilter].forEach(filter => {
			if (!filter.active) {
				activeFilters.push(filter);
			}
		});
	});
	return activeFilters;
};

export default class News extends React.Component {

	state = {
		data: [],
		filters: {}
	}; 

	componentDidMount() {
		this.load();
	}

	fetchData = (dataName) => {
		const filters = this.state.filters;
		const dataUrl = `https://s3.eu-central-1.amazonaws.com/moje-mesto-serve/${dataName}.json`;
		fetch(dataUrl)
			.then(response => response.json())
			.then(downloadedData => {
				const data = this.state.data;
				downloadedData.forEach((item, idx) => {
					if (!filters[dataName]) {
						filters[dataName] = [];
					}
					filters[dataName].push({ mainFilter: dataName, subFilter: item[0].dataName, active: true, idx });

					item.forEach(item2 => {
						data.push({ 
							...item2, 
							filter: {
								mainFilter: dataName, 
								subFilter: item[0].dataName, 
								idx: idx 
							}
						});
					})
				});
				
				this.setState({ 
					data: data.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)), 
					filters
				 });
			})
			.catch(err => console.error(dataUrl, err.toString()))
	}

	load = () => {
		['rss', 'twitter', 'facebook'].forEach(dataName => this.fetchData(dataName));
	}

	setUnsetFilter = (mainFilter, filter) => {
		const newFilter = { ...filter, active: !filter.active };
		const filters = Object.assign({}, this.state.filters);
		filters[mainFilter][filters[mainFilter].indexOf(filter)] = newFilter;

		this.setState({ ...this.state, filters});
	}

	render() {
		return <Container>
			<Data>
				<DataRenderer data={this.state.data} filters={getActiveFilter(this.state.filters)} />
			</Data>
			<Settings>
				<FilterTitle>filtry</FilterTitle>
				{ Object.keys(this.state.filters).map(key => <SettingPath key={key}>
					<SettingTitle>
						{renderSvg(`socialIcons/${key}.svg`, 'width: 20px; margin-right: 10px;')}
						{key === 'rss' ? Pardubice.news.rssTrans : key}
					</SettingTitle>

					{this.state.filters[key].map(subFilter => {
						return <SettingSubPath 
							key={`${key}_${subFilter.subFilter}_${subFilter.idx}`}
							onClick={() => this.setUnsetFilter(key, subFilter)}
						>
							<span style={subFilter.active ? activeFilter : inactiveFilter}>
								{subFilter.subFilter}
							</span>
						</SettingSubPath>;
					})}

					</SettingPath>				
				)}
			</Settings>
		</Container>
	}

}
