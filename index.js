let button = document.getElementById("button");
let content = document.getElementById("content");
// eventlistener allows us to potentially assign multiple handlers for an onclick event
button.addEventListener("click", loadContent);
// storing pokemon here, because it might be useful.
let pokemonArray = [];
// AJAX (old method for interacting with the web from JS)
// Fetch API (more commonly used method) - allows us to asynchronously retrieve data from the web
// asynchronous - we need be able to instruct our program for how to interpret data that doesn't come immediately
// a 'promise' is a special object in JS that will, eventually, resemble a real value. At the start, it doesnt.
// "I promise that I will have your API GET Response ... eventually"
async function loadContent(){
    console.log("button works!");
    // it may take a short amount of time to retrieve data.
    // 'await' allows javascript to handle other events while it's waiting. We'll resume this line of code
    // later.
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    console.log(response);
    let body = await response.json();
    console.log(body);
    // add every single item from the 'results' array in the body to my pokemonArray.
    console.log(body.results);
    for(let i = 0; i < body.results.length; i++){
        // add every element to the array
        pokemonArray.push(body.results[i]);
    }
    console.log(pokemonArray);
    addEveryPokemon();
}
function addEveryPokemon(){
    for(let i = 0; i < pokemonArray.length; i++){
        // create an element and append it to the site
        let pokemonTitle = document.createElement("h3");
        pokemonTitle.innerText = pokemonArray[i].name;
        // a tags are links
        let pokemonUrl = document.createElement("a");
        pokemonUrl.innerText = pokemonArray[i].url;
        pokemonUrl.href = pokemonArray[i].url;

        content.appendChild(pokemonTitle);
        content.appendChild(pokemonUrl);
    }
}

// CORS is a security protocol that prevents an API from responding to a site that it doesn't intend to.
// For instance, facebook.com is the only site that facebook allows its API to respond to. so, twitter can't
// just randomly start interacting with its competitors.

// Your browser must send a pre-flight request to have the backend inform your browser as to what types of
// requests are permitted.