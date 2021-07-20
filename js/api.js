const base_url = 'https://api.magicthegathering.io/v1' //This was cat facts originally

const endpoint1 = '/cards'

fetch(base_url + endpoint1).then( res => {
    return res.json();
}).then( facts => {
    // console.log(facts);

    let cards = facts.cards; //facts.cards is pulling all 100 available cards to display
    console.log(cards);

    //Get Data Value
    let output = ""

    // facts.forEach( catFactObject => {
    //     const li = document.createElement('li');
    //     document.body.appendChild(li);
    //     li.innerText = catFactObject.text;
    // })
});


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
