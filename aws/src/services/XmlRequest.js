import request from 'request';

export default (url) => {
	return new Promise(async (resolve, reject) => request({ url, encoding: null }, async (err, res, body) => {
		if (err) {
			reject(`Err in request ${err}`);
		}

		if (!res || res.statusCode !== 200) {
			reject(`Bad response ${res}`);
		}
		
		resolve(body);
	}));
}