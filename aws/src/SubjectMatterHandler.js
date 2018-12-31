import AWS from 'aws-sdk';
import uuid from 'uuid/v4';
import sha256 from 'crypto-js/sha256';
import config from 'config';
import CryptoJS from 'crypto-js';
import Logger from './services/Logger';

module.exports.send = (event, context, callback) => {
	const logger = Logger({ event, context });	
	logger.info('Subject matter send handler');

	const dataToSave = JSON.parse(event.body);
	const salt = config.get('mojeMesto.api.salt');
	const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

	// TODO check when question is in dynamo, how?

	ddb.putItem({
		TableName: 'moje-mesto-subject-matter',
		Item: {
			id: { S: uuid() },
			email: { S: sha256(salt + dataToSave.email).toString(CryptoJS.enc.Base64) },
			name: { S: dataToSave.name },
			message: { S: dataToSave.message },
			ip: { S: event.requestContext.identity.sourceIp },
			sended: { N: Math.floor(Date.now() / 1000).toString() }
		}
	}, (err, data) => {
		if (err) {
			logger.warn("Unable to put item. Error:", JSON.stringify(err, null, 2));
		}
		
		// TODO send mail

		callback(null, {
			statusCode: '200',
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		});

	});
}

module.exports.get = (event, context, callback) => {
	
	var docClient = new AWS.DynamoDB.DocumentClient();
	
	var params = {
		TableName : 'moje-mesto-subject-matter'
	};
	
	docClient.scan(params, function(err, data) {
		if (err) {
			logger.warn("Unable to query. Error:", JSON.stringify(err, null, 2));
		} else {
			callback(null, {
				statusCode: '200',
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(data)
			});
		}
	});
}