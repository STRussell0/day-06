let promiseToTakeOutTrash = new Promise(function(resolve, reject) { 
    //Created a variable with a new promise with a function that has parameters of resolve and reject

// Taking out the trash

let trashIsOut = false; //Created a variable with regarding what we want the promise to resolve

if (trashIsOut) {
    resolve('Taken Out'); //If true, the resolve parameter is a string saying Taken Out
} else {
    reject('left in the can'); //Or else, reject it
}

});

promiseToTakeOutTrash.then(function(fromResolve) { //Call back the promise with then. If true, console log string from resolve
    console.log('the trash has been ' + fromResolve);
}).catch(function(fromReject){  //if false, console log string from reject
    console.log('the trash has been ' + fromReject);
});



//below functions all require the previous one to resolve to continue

let cleanRoom = function() { //created a function that will return a promise
    return new Promise(function (resolve, reject) { //it will return with a new promise that will either resolve or reject
        resolve('Cleaned the room'); //only set resolve, so this will resolve. resolve is set to a string declaring the room was cleaned
    });
};

let removeGarbage = function(message) { //created a function with a message as a parameter
    return new Promise(function (resolve, reject) { //it will return with a new promise that will either resolve or reject
        resolve(message + ' Remove Garbage'); //only set to resolve, so this will resolve. resolve is set to the message parameter + a string declaring garbage removed
    });
};

let winIceCream = function(message) { //created a function with a message as a parameter
    return new Promise(function (resolve, reject) { // it will return with a new promise that will either resolve or reject
        resolve(message + ' won Ice cream'); //only set to resolve, so this will resolve. resolve is set to the message parameter + a string declaring ice cream won
    });
};

cleanRoom() //call the cleanRoom function
.then(function(result){ //If true, run function with parameter
    return removeGarbage(result); //return the removeGarbage function with the result parameter (result being message from earlier)
})
.then(function(result){
    return winIceCream(result);
})
.then(function(result){
    console.log('finished ' + result);
});

Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){ //if all promises fulfilled in array, return function
    console.log('all finished');
})

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){ //if one promise fulfilled in array, return function
    console.log('one is finished');
})