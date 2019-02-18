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
							.replace("ALISOVIEJO", "ALISO VIEJO")
							.replace("DANAPOINT", "DANA POINT")
							.replace("FOOTHILLRANCH","FOOTHILL RANCH")
							.replace("LAKEFOREST","LAKE FOREST")
							.replace("LAGUNAHILLS","LAGUNA HILLS")
							.replace("LAGUNANIGUEL", "LAGUNA NIGUEL")
							.replace("LASFLORES", "LAS FLORES")
							.replace("MISSIONVIEJO", "MISSION VIEJO")
							.replace("NEWPORTBEACHHARBOR", "NEWPORT BEACH HARBOR")
							.replace("ORANGECOUNTY", "ORANGE COUNTY")
							.replace("RANCHOSANTAMARGARITA", "RANCHO SANTA MARGARITA")
							.replace("JOHNWAYNEAIRPORT","SANTA ANA")
							.replace("SANTAANA","SANTA ANA")
							.replace("SANCLEMENTE", "SAN CLEMENTE")
							.replace("SANJUANCAPISTRANO", "SAN JUAN CAPISTRANO")
							.replace("SILVERADOCANYON", "SILVERADO CANYON")
							.replace("SUNSETBEACHHARBOR", "SUNSET BEACH HARBOR")
							.replace("YORBALINDA", "YORBA LINDA");
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
							.replace("CM D ", "CAMINO DE ")
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
