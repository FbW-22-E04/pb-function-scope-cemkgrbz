//1

function exponentialValues (x, y) {
    for (let i = 1; i <= y; i++ )
    console.log(x ** i)
};
exponentialValues(5,6);

//2

const fruit = 'banana';
function printFavoriteFruit () {
    console.log('My favorite fruit is', fruit)
}
printFavoriteFruit (fruit)

//

function exponent (a, b) {
    const result = a ** b;
    console.log(result);
};
exponent(3, 5);

// console.log(result)
// It's not possible to access the variable 'result'. It gives an error, called 'ReferenceError: result is not defined'. Because the variable 'result' is defined in the scope of the exponent function.
