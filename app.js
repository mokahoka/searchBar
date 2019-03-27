// Javascript external file

console.log("JS file was attached successfull")

const searchBar  = document.getElementById("input")
// const allowedInputs = 
const test = (e) => {
	console.log("I am running this event!");
}

searchBar.addEventListener("keyup", async (event) => {
	// console.log("Event ran was,", event)
	if( event.key.charCodeAt() > 47 && event.key.charCodeAt() < 58 ||
		event.key.charCodeAt() > 64 && event.key.charCodeAt() < 91 ||
		event.key.charCodeAt() > 96 && event.key.charCodeAt() < 122 ||
		event.key == "Backspace"){
			
			const query = event.target.value;
			const results  = await fetch(`http://localhost:1337/api/${query}`)
								  .then(res => res.json())
								  .then(val => val.results)
								  .catch(err => console.log(err.message))

			if( results && results.length > 0){
				const searchResults = document.getElementById("search-results");
				
				while(searchResults.hasChildNodes()){
					searchResults.removeChild(searchResults.firstChild);
				}

				results.forEach( val => {
					const para = document.createElement("p");
					para.innerHTML = val
					searchResults.appendChild(para);
				})
			} 

	}
})

// 34567890qwertyuiopasdfghjklzxcvbnm
// event.key == "Enter" || 

// ["1","2","3",'4','5','6','7','8','9','0',
// 						'q','w','e','r','t','y','u','i','o','p',
// 						'a','s','d','f',ghjklzxcvbnm]