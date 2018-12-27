import Parser from 'rss-parser';
import S3 from './services/S3Connect';
import Logger from './services/Logger';
import config from 'config';

module.exports.rss = async (event, context, callback) => {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 

	const logger = Logger({ event, context });

	const rssFeeds = config.get('data.rss');

	const parser = new Parser();
	const data = Object.keys(rssFeeds).map(dataName => parser.parseURL(rssFeeds[dataName]));
	
	await Promise.all(data).then(dataResponse => {
		const fileToSave = dataResponse
		.filter(feed => feed.items.length > 0)
		.map(feed => {
			return feed.items.map(item => ({
				dataName: feed.title,
				...item
			}));
		});

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
