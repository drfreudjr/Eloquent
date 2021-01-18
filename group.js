/* Javascript Group Exercise */
'use strict';
let cl = console.log;

class Group {
    constructor(name){

    this.array = [1,2];

    this.add = function (itemToAdd) {
        // cl(`trying to add ${itemToAdd}`);
            if (this.array.includes(itemToAdd) == true) 
                console.log('Sorry item already in list');
            else {
                this.array.push(itemToAdd);
                console.log(`${itemToAdd} has been added`);
                console.log(`The list is now ${this.array}`);     
            }
    }
    this.delete = function (itemToDelete) {
        if (this.array.includes(itemToDelete) == true) {
            console.log(`Deleting ${itemToDelete}`);
            let x = this.array.indexOf(itemToDelete);
            this.array.splice(x,1);
            if (this.array.length)
                console.log(`The list is now ${this.array}`);
            else
                console.log('The list is empty');
            }
        else 
            console.log('Sorry no such item');
        }
    this.has = function (itemToCheck){
        if (this.array.includes(itemToCheck))
            console.log(`${itemToCheck} is in the list`);
        else
            console.log(`${itemToCheck} is not in the list`)
    }
    }

}

let test = new Group();

test.add(2);
test.add(3);
test.delete(1);
test.delete(2);
test.delete(3);
test.add(2);
test.has(2);
test.has(3);




// cl(test.array);

