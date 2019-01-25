import S3 from './services/S3Connect';
import Logger from './services/Logger';
import config from 'config';
import request from './services/XmlRequest';
import xmlParer from './services/XmlParser';

module.exports.rss = (event, context, callback) => {
	
	const logger = Logger({ event, context });
	const rssFeeds = config.get('data.rss');
	
	const data = rssFeeds.map(async feed => {
		const body = await request(feed.url);
		const json = await xmlParer(body);
		return json.rss.channel;
	});

	Promise.all(data).then(dataResponse => {

		const fileToSave = dataResponse
			.filter(feed => feed.item.length > 0)
			.map(feed => feed.item.map(item => ({
				...item,
				dataName: feed.title,
				pubDate: new Date(feed.pubDate)
				})
			)
		);
		
		try {
			S3().putObject({
				ContentType: 'application/json; charset=utf-8',
				CacheControl: 'max-age=120',
				Bucket: 'moje-mesto-serve',
				Key: 'rss.json',
				ACL:'public-read',
				Body: JSON.stringify(fileToSave),
			}, (err, data) => {
				logger.warn(err);
				logger.info(data);
			});
			callback(null, {
				statusCode: '200',
				body: 'OK'
			});
		} catch (ex) {
			logger.warn(ex);
			callback(null, {
				statusCode: '400',
				body: 'err'
			});
		}
	});
};
