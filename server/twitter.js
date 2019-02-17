const express = require('express');
const router = express.Router();

const Twitter = require('twitter');
const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Get Posts from OCSD Bot
router.get('/', (req, res) => {
	let params = {screen_name: 'OCSD_Bot'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			res.json(tweets)
		}
	});
})

// Add Posts
module.exports = router;
