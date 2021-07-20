const base_url = 'https://cat-fact.herokuapp.com' 

const endpoint1 = '/facts'

fetch(base_url + endpoint1) 
    .then( response => { //then take that information and turn it into a variable we have called response of the previous line
    return response.json(); // and return the conversion of the response, which was jumbled nonsense
})  .then( catFacts => { // and THEN take THAT information and turn it into a variable we have called catFacts
    console.log(catFacts); // console log the information
    console.log(Math.floor(Math.random()*5)); //console log a random number between 0 and 4)
    alert(catFacts[Math.floor(Math.random()*5)].text) //thank you Austin! alert a random fact from the cat API
    // catFacts.forEach( catFactObject => {
        // const li = document.createElement('li');
        // document.body.appendChild(li);
        // li.innerText = catFactObject.text;
    // })
});




// Pokemon Stuff


// const offsetInput = document.querySelectorAll('input')[0];
// const listLengthInput = document.querySelectorAll('input')[1];
// const button = document.querySelector('button');
// const listElement = document.querySelector('.list');
// const pokemonElement = document.querySelector('.pokemon');
// let offset = 0;
// let listLength = 10;

// button.addEventListener('click', () => {
//     offset = offsetInput.value;
//     listLength = listLengthInput.value;
//     getPokemonList();
// })

// function getPokemonByName(name){
//     const base_url = 'https://pokeapi.co/api/v2/pokemon/';

//     fetch(base_url + name)
//     .then( res => {
//         return res.json();
// }).then( facts => {
//     pokemonElement.innerHTML = '';
//     console.log(facts);
//     const h1 = document.createElement('h1');
//     h1.innerText = facts.name;
//     pokemonElement.appendChild(h1);

//     const img = document.createElement('img');
//     pokemonElement.appendChild(img);
//     img.src = facts.sprites.front_default;
//     img.width = '200';
// });
// }

// getPokemonByName('charizard');

// function getPokemonList() {
//     const base_url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${listLength}`;
    
//     fetch(base_url) // fetch the api
//     .then(res => res.json()) //change the response to a json
//     .then(data => { //then do something with the data

//         listElement.innerHTML = '';
//         data.results.forEach( pokemon => { //do something with each pokemon
//             const li = document.createElement('li'); //make a list item
//             li.innerText = pokemon.name; //make the list item display the pokemon name
//             listElement.appendChild(li); // attach the list item to the html
//             li.addEventListener('click', () => { //add a click function
//                 getPokemonByName(pokemon.name); // display the previous function that shows the image and pokemon name
//             })

//         });
//     });
// }

// getPokemonList();

// function getPokemonByName(name){ // copy of the pokemon one

//     const base_url = 'https://pokeapi.co/api/v2/pokemon/';

// fetch(base_url + name).then( res => {
//     return res.json();
// }).then( facts => {
//     console.log(facts);
//     const h1 = document.createElement('h1');
//     h1.innerText = facts.name;
//     document.body.appendChild(h1);

//     const img = document.createElement('img');
//     document.body.appendChild(img);
//     img.src = facts.sprites.front_default;
//     img.width = '200';
// });
// }

// getPokemonByName('charizard');

// function getPokemonList() {
//     const base_url = 'https://pokeapi.co/api/v2/pokemon/?offset=1116&limit=10';
    
//     fetch(base_url) // fetch the api
//     .then(res => res.json()) //change the response to a json
//     .then(data => { //then do something with the data
//         data.results.forEach( pokemon => { //do something with each pokemon
//             const li = document.createElement('li'); //make a list item
//             li.innerText = pokemon.name; //make the list item display the pokemon name
//             document.body.appendChild(li); // attach the list item to the html
//             li.addEventListener('click', () => { //add a click function
//                 getPokemonByName(pokemon.name); // display the previous function that shows the image and pokemon name
//             })

//         });
//     });
// }

// getPokemonList();
