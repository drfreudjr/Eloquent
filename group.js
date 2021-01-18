/* Javascript Group Exercise */
'use strict';
let cl = console.log;

class Group {
    constructor(name){

    this.array = [];

    this.add = function (itemToAdd) {
        cl(`trying to add ${itemToAdd}`);
            if (this.array.includes(itemToAdd) == true) 
                console.log('Sorry item already in list');
            else 
                this.array.push(itemToAdd);         
        }
    }
}

let test = new Group();

test.add(3);
cl(test.array);
test.add(3);

