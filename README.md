# OC Alerts

A simple alerts app to visualize local crime.  This will be built on the MEVN stack, and use the twitter and mapbox APIs.  

This is an open source project to achieve the following:
* Learn a new framework - VueJS
* Civic hacking - to make the world a better place!

This got started by pulling data from the @OCSD_Bot and populating it on a map.  This project is not affiliated with OCSD.

Note: This project stopped working after the @OCSD_Bot stopped tweeting.  Maybe this can be updated with data from somewhere else...

Feel free to follow, clone, contribute!  There are a lot of cool things that could be done (e.g. marker color codes, map animations, pull date ranges of data, and many more).  Follow along on twitter @initialapps.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Clone the repo:

```
git clone https://github.com/initialapps/OC_Alerts.git
```

### Prerequisites

You will need npm:
```
npm install npm@latest -g
```

You will likely also need vue-cli:
```
npm install -g @vue/cli
```
## Installation

Install the server dependencies
```
cd oc_alerts
npm install
```

Grab your own twitter api keys and add them as environment variables in a .env file:

TWITTER_CONSUMER_KEY = *Your key*
TWITTER_CONSUMER_SECRET = *Your key*
TWITTER_ACCESS_TOKEN_KEY = *Your key*
TWITTER_ACCESS_TOKEN_SECRET = *Your key*

Be sure to add .env and node_modules to your .gitignore file!

Install the client dependencies
```
cd client // from the oc_alerts directory
npm install
```


## Development

To start your development server, from the root directory run:
```
npm run dev
```

To start the vue client, from the client directory run:
```
npm run serve
```

## Deployment

Check out the run scripts in the package.json files for how to run things.  

The oc_alerts folder contains the server side stuff.  The client folder has the vuejs client stuff. 

Be sure to run `npm run build` from the client directory before pushing.

## Built With

* [VueJS](https://vuejs.org/) - The web framework used
* [NodeJS](https://nodejs.org/en/) - Server 
* [ExpressJS](https://expressjs.com/) - Server Framework
* [MapBox](https://www.mapbox.com/) - For the nice maps!
* [Twitter](https://developer.twitter.com/) - Where we'll get our data.

## Contributing

Please feel free to contribute!  Clone and pull request.

## Versioning

Nothing fancy.  Anyone know any good versioning methods?

## Authors

* **Andrew Akagawa** - *Author* - [Initial Apps](https://www.initialapps.com)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Thanks MEVN, MapBox, Twitter, and the opensource community
