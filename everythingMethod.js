/* Everything Exercise 
Hand coded 'Every' method */
'use strict';
let cl = console.log;
document.write("Javascript Active: " + Date())

const array = [1,3,4,6,9];
let testFunction = x => x < 10;

function everyMethod (array, myFunction) {
    for (let i in array) {
        if (!myFunction(array[i]))
            return(false);
    }
    return(true);
}

console.log(everyMethod(array, testFunction));
