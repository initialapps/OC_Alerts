import axios from 'axios';

const url = '/twitter/';

class TwitterService {
	static getTweets(){
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url);
				const data = res.data;
				resolve(
					data.map(post => { 
						let parsedData = {}
						parsedData.call = post.text.split(': ')[1].split(/\n/g)[0].trim();
						parsedData.city = post.text
							.toUpperCase()
							.split('#')[1]
							.replace("SANCLEMENTE", "SAN CLEMENTE")
							.replace("ORANGECOUNTY", "ORANGE COUNTY")
							.replace("FOOTHILLRANCH","FOOTHILL RANCH")
							.replace("LAKEFOREST","LAKE FOREST")
							.replace("LAGUNAHILLS","LAGUNA HILLS")
							.replace("NEWPORTBEACHHARBOR", "NEWPORT BEACH HARBOR")
							.replace("RANCHOSANTAMARGARITA", "RANCHO SANTA MARGARITA")
							.replace("JOHNWAYNEAIRPORT","SANTA ANA")
							.replace("SUNSETBEACHHARBOR", "SUNSET BEACH HARBOR");
						parsedData.address = post.text.split(': ')[2]
							.split(",")[0]
							.replace(" BLK ", " ")
							.replace(" AV ", " AVE ")
							.replace(" AVD ", " AVE ")
							.replace(" WY ", " WAY ")
							.replace(" CL ", " CALLE ")
							.replace(/ AV$/, " AVE")
							.replace(/ AVD$/, " AVE")
							.replace(/ WY$/, " WAY")
							.replace(/ CL$/, " CALLE")
							.replace(" // "," AND ")
							.trim() + ", " + parsedData.city + ", CALIFORNIA";
						parsedData.time = post.text.split(': ')[3].split(/\n/g)[0].trim();
						return parsedData;
					})
				);
			} catch (err) {
				reject(err);
			}
		})
	}
}

export default TwitterService
