# OC Alerts

A simple alerts app to visualize local crime.  This will be built on the MEVN stack, and use the twitter and mapbox APIs.  

This is an open source project to achieve the following:
* Learn a new framework - VueJS
* Civic hacking - to make the world a better place!

Generally going to start by pulling data from the @OCSD_Bot and populating it on a map.  We'll see where this goes from there.  This project is not affiliated with OCSD.

Note: This project is just getting started, so it's a bit of a mess right now.  Nothing works yet.  Checkout the issues and project board to see where this is at.

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


## Running the tests

Nothing yet.  Feel free to add and pull request!

## Deployment

Not much to this now.  Check out the run scripts in the package.json files for how to run things.  

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
