// things i need to learn about: 
// __proto__
// promises
// JSON
// Async
// APIs


const appName = 'cool app';
const version = 1.1;
const production = false;

const favoriteVariables = [appName, version, production];

const favoriteVariables2 = {
    favoriteString: appName,
    favoriteNumber: version,
    favoriteBoolean: production,
};



function myFunction() {
    const name = 'boy';
    console.log(name);
}

myFunction();

const array = {length: 3, 0: appName, 1: version, 2: production};

console.log(favoriteVariables.length, array.length);

const user1 = { //3 different user objects
    username: 'Dude',
    hairColor: 'Brown',
    favoriteColor: 'Purple'
}
const user2 = {
    username: 'Man',
    hairColor: 'Brown',
    favoriteColor: 'Purple'
}
const user3 = {
    username: 'Wow',
    hairColor: 'Brown',
    favoriteColor: 'Purple'
}

const users = [user1, user2, user3]; //all user objects put into array

console.log(users[2].username); //displaying the property of username for user3 in the console log

JSON.stringify({username: 'Jim', password: '55555'})

const myPromise = new Promise(function(resolve, reject) {
    reject(new Error('No internet connection'))
    setTimeout(() => resolve("{\"username\":\"Jim\",\"password\":\"55555\"}"), 5000);
});

const myPromise2 = new Promise(function(resolve, reject) {
    reject(new Error('No internet connection'))
    setTimeout(() => resolve("{\"username\":\"Jim\",\"password\":\"55555\"}"), 5000);
});

Promise.all([myPromise, myPromise2]).then( data => {
    console.log('data', data);
}).catch(err => {
    console.log(err);
}).finally(() => console.log('finally'))