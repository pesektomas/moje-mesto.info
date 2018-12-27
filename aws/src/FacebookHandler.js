import FacebookLoader from './services/FacebookLoader';
import S3 from './services/S3Connect';
import Logger from './services/Logger';
import config from 'config';

module.exports.facebook = async (event, context, callback) => {
	const logger = Logger({ event, context });
	logger.info('facebook handler');
	
	await FacebookLoader.getToken({ logger }).then(async (accessToken) => {
		const facebookData = config.get('data.facebook').map(account => FacebookLoader.loadData(account, accessToken));
		await Promise.all(facebookData).then(facebookData => {
			try {
				S3().putObject({
					ContentType: 'application/json; charset=utf-8',
					CacheControl: 'max-age=120',
					Bucket: 'moje-mesto-serve',
					ACL:'public-read',
					Key: 'facebook.json',
					Body: JSON.stringify(facebookData),
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
	});
};
