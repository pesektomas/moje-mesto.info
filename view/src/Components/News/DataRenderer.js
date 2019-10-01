import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';
import trim from '../../Helpers/trim';
import renderSvg from './renderSvg.js';

import { Flex, DataImage, DateTime, DataName, PostData, PostLink, ResponsiveImage } from './Styles';

const filter = (data, filters) => {
	const filteredData = [];
	data.forEach(item => {
		const isFiltered = filters.find(filter => filter.mainFilter === item.filter.mainFilter && filter.subFilter === item.filter.subFilter && filter.idx === item.filter.idx);
		if(!isFiltered) {
			filteredData.push(item);
		}
	});
	return filteredData;
}

const renderImage = (item) => {
	if (item.original && item.original['extended_entities'] && item.original['extended_entities'].media && item.original['extended_entities'].media.length > 0) {
		return <DataImage>
			<ResponsiveImage src={item.original['extended_entities'].media[0]['media_url_https']} />
		</DataImage>;
	}
};

export default class DataRenderer extends React.Component {

	render() {
		return <div>
			{filter(this.props.data, this.props.filters).map((item, idx) => {
				return <PostLink href={item.link} target="_blank" key={`dataRenderer_${idx}`} title={item.title}>
					<PostData>
						{trim(item.title)}
						{renderImage(item)}
					</PostData>
					<Flex>
						<DateTime>
							<FormattedDate value={item.pubDate} /> <FormattedTime value={item.pubDate} />
						</DateTime>
						<DataName>
							{renderSvg(`socialIcons/${item.filter.mainFilter}.svg`, 'width: 20px; margin-right: 5px;')}
							{item.dataName}
						</DataName>
					</Flex>
				</PostLink>;
			})}
		</div>
	}
}

DataRenderer.propTypes = {
	data: PropTypes.array.isRequired,
	filters: PropTypes.array.isRequired
}
