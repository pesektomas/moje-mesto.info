import TwitterLoader from './services/TwitterLoader';
import S3 from './services/S3Connect';
import Logger from './services/Logger';
import config from 'config';

module.exports.twitter = async (event, context, callback) => {
	const logger = Logger({ event, context });
	logger.info('twitter handler');

	const twitterLoader = new TwitterLoader();
	const twitterData = config.get('data.twitter').map(account => twitterLoader.loadData(account));

	await Promise.all(twitterData).then(twitterData => {
		try {
			S3().putObject({
				ContentType: 'application/json; charset=utf-8',
				CacheControl: 'max-age=120',
				Bucket: 'moje-mesto-serve',
				ACL:'public-read',
				Key: 'twitter.json',
				Body: JSON.stringify(twitterData),
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
