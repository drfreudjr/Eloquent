/* Flattening Exercise 
   Converts 2D array to unidimensional */

'use strict';
let cl = console.log;
document.write("Javascript Active: " + Date())

const arr1 = [2000, "audi", "s5"];
const arr2 = [2010, "toyota", "corolla"];
const arr3 = [1992, "chevy", "nova"];

const cars = [arr1, arr2, arr3];

let outputArray = [];

function combine (array) {
    let combinedEl = array.reduce((a,b) => a + " " +b);
    return(combinedEl);
}

cars.forEach(i => outputArray.push(combine(i)));

console.log(outputArray);


