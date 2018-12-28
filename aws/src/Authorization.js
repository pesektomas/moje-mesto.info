import config from 'config';

const generatePolicy = (principalId, effect, event) => {
	const authResponse = { principalId };
	const resource = event.methodArn.split('/').slice(0, 2).concat('*').join('/');

	if (effect && resource) {
		const policyDocument = {};
		policyDocument.Version = '2012-10-17';
		policyDocument.Statement = [];
		const statementOne = {};
		statementOne.Action = 'execute-api:Invoke';
		statementOne.Effect = effect;
		statementOne.Resource = resource;
		policyDocument.Statement[0] = statementOne;
		authResponse.policyDocument = policyDocument;
	}
	return authResponse;
};

const searchHeaderValue = (name = '', headers = {}) => {
	const normalizedName = name.toLowerCase();
	let localName;
	for (localName in headers) {
		if (localName.toLowerCase() === normalizedName) {
			return headers[localName];
		}
	}
	return undefined;
};

const auth = (event, context, callback) => {
	if (searchHeaderValue(config.get('mojeMesto.api.header'), event.headers) !== config.get('mojeMesto.api.value')) {
		return callback('Unauthorized');
	}
	return callback(null, generatePolicy('auth', 'Allow', event));
};

module.exports.auth = auth;
