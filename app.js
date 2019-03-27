// Javascript external file

const URL = "http://localhost:1337/api";
const searchBar  = document.getElementById("input")

// timeout for debouncing
let timeout = 0;

searchBar.addEventListener("keyup", (event) => {
	
	// egisters only valid keypresses
	if( event.key.charCodeAt() > 47 && event.key.charCodeAt() < 58 ||
		event.key.charCodeAt() > 64 && event.key.charCodeAt() < 91 ||
		event.key.charCodeAt() > 96 && event.key.charCodeAt() < 122 ||
		event.key == "Backspace"){
			
			const query = event.target.value;
			if( query.length > 1){
			clearTimeout(timeout);

			timeout = setTimeout( async () => {

			const results  = await fetch(`${URL}/${query}`)
								  .then(res => res.json())
								  .then(val => val.results)
								  .catch(err => [])

			if( results && results.length > 0){
				const searchResults = document.getElementById("search-results");
				
				while(searchResults.hasChildNodes()){
					searchResults.removeChild(searchResults.firstChild);
				}

				results.forEach( val => {
					const link = document.createElement("a");
					const para = document.createElement("p");
					para.innerHTML = val
					link.appendChild(para)
					searchResults.appendChild(link);
					})
				} 
			},200)
		}
	}
})
