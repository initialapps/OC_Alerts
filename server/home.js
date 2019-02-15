const express = require('express');

const router = express.Router();


// Get Posts
router.get('/', (req, res) => {
	res.send('hello');
})

// Add Posts



module.exports = router;
