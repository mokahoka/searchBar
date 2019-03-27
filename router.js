// defines routes for API

const express = require('express')
const router = express.Router()
const { cites } = require('./data.js');


// utils functions

const getCites = (query) => {

	// add trims 
	const results = cites.filter((val) => {
		if( val.toLowerCase().indexOf(query) >= 0 ) return true
		return false;
	})
	return results;
}

// Routes

router.get("/", (req,res) => {
	res.send("Hello world!");
});

// using query params for fetching query;
router.get("/api/:query", (req,res) => {
	const {query} = req.params;
	const results = getCites(query);
	res.json({results});
})

module.exports = router;