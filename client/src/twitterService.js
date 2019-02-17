import axios from 'axios';

const url = '/twitter/';

class TwitterService {
	static getTweets(){
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(post => ({
						...post,
						createdAt: new Date(post.createdAt)
					}))
				);
			} catch (err) {
				reject(err);
			}
		})
	}
}

export default TwitterService
