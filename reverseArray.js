// Reverse Array exercise //

ARRAY = [1,2,3,4,5];

function returnReverseArray (array) {
    newArray = [];
    len = array.length;
    for (i = 0; i < len; ++i) {
        // console.log(i, ARRAY[i]);
        newArray[i] = array[len-i-1];
    }
    return(newArray);
}

revArray = returnReverseArray(ARRAY);
console.log(revArray);


