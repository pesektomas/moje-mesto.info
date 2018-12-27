import FB from 'fb';
import config from 'config';

export default class FacebookLoader {

	static getToken(dependecies) {
		return this.accessToken = FB.api('oauth/access_token', {
			client_id: config.get('mojeMesto.connections.facebook.clientId'),
			client_secret: config.get('mojeMesto.connections.facebook.clientSecret'),
			redirect_uri: config.get('mojeMesto.connections.facebook.redirectUri'),
			grant_type: config.get('mojeMesto.connections.facebook.grantType')
		}).then(res => {
			if(!res || res.error) {
				dependecies.logger.warn(!res ? 'error occurred' : res.error);
				return;
			}
			return res.access_token;
		});
	}

	static loadData(name, accessToken) {
		return FB.api(name, {
			fields: 'feed',
			'access_token': accessToken
		}).then(res => {
			return res.feed.data.map(post => ({
				dataName: name,
				link: `https://www.facebook.com/${name}/posts/${post.id.split('_')[1]}`,
				pubDate: post.created_time,
				title: `${post.message} ${post.story ? ':'+post.story : ''}`,
				original: { ...post }
			}));
		});
	}
}