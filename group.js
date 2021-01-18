/* Javascript Group Exercise */
'use strict';
let cl = console.log;

class Group {
    constructor(name){

    this.array = [1,2,3,4,5];

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
        cl(`trying to delete ${itemToDelete}`);
        if (this.array.includes(itemToDelete) == true) {
            console.log(`Deleting ${itemToDelete}`);
            let x = this.array.indexOf(itemToDelete);
            console.log(`X is ${x}`);
            this.array.splice(x,1);
            console.log(`The list is now ${this.array}`);
            }
        else 
            console.log('Sorry no such item');
        }
    }
}

let test = new Group();
test.add(6);
test.delete(1);
test.delete(3);


cl(test.array);

