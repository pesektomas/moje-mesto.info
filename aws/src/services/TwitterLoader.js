import Twitter from 'twitter';
import config from 'config';

export default class TwitterLoader {

	constructor() {
		this.client = new Twitter({
			consumer_key: config.get('mojeMesto.connections.twitter.customerKey'),
			consumer_secret: config.get('mojeMesto.connections.twitter.customerSecret'),
			bearer_token: config.get('mojeMesto.connections.twitter.bearerToken'),
			rest_base: config.get('mojeMesto.connections.twitter.restBase'),
		});
	}

	loadData(name) {
		return this.client.get('statuses/user_timeline', { screen_name: name }).then(tweets => tweets.map(tweet => ({
			dataName: name,
			link: `https://twitter.com/${name}/status/${tweet.id_str}`,
			pubDate: tweet.created_at,
			title: tweet.text,
			original: { ...tweet }
		})))
	}
}