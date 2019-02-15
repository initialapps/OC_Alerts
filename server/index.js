const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());

// Routes
const home = require('./home');
app.use('/home', home);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
