// Sum of range exercise //


function arrayRange (num1,num2) {
    const arrayLength = num2 - num1 + 1;
    list = [];

    for (i = 0; i < arrayLength; ++i) 
        list[i] = num1 + i;
    return (list);
}

console.log(arrayRange(3,8));

