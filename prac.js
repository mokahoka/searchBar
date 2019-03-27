// A practise module to test the function

const { cites } = require('./data.js');

let query = "sa";

// takes a string and returns array of matching results form data
function getCites(query){
	const results = cites.filter((val) => {
		if( val.toLowerCase().indexOf(query) >= 0 ) return true
		return false;
	})

	console.log("The results are:",results);
	return results;
}

getCites(query);