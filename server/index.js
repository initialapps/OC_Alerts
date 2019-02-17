const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());

// Routes
const twitter = require('./twitter');
app.use('/twitter', twitter);

const port = process.env.PORT || 5000;

// Production
if(process.env.NODE_ENV === 'production'){
	// Static folder
	app.use(express.static(__dirname + '/public/'))

	// Single Page App
	app.get(/.*/, (req, res) => res.sendFile(__dirname + 'public/index.html'));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
