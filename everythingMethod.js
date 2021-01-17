/* Everything Exercise 
Hand coded 'Every' method */
'use strict';

 const array = [1,3,4,6,9];

let cl = console.log;

document.write("Javascript Active: " + Date())




// let x = myEveryMethod(array, i => i < 10);

function everyMethod (array, myFunction) {
    cl(array);
    for (let i in array) {
        cl(array[i]);
        if (!myFunction(array[i]))
            return(false);
    }
    return(true);
}

 let bool = everyMethod(array, x => x <10);

 cl(bool);