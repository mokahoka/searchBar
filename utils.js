// Utils file for utility functions
const { cites } = require('./data.js');

const getCites = (query) => {

	// add trims 
	const results = cites.filter((val) => {
		if( val.toLowerCase().indexOf(query) >= 0 ) return true
		return false;
	})
	return results;
}

module.exports = getCites