//1

function exponentialValue(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        console.log("x or y is not a number");
      }
    let exponentResult = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
        exponentResult *= x;
        values += `${exponentResult} `;
      }
      console.log(values);
};

exponentialValue(5,6);

//2

let fruit = 'banana';
function printFavoriteFruit () {
    fruit = 'watermelon'
    console.log('My favorite fruit is', fruit)
}
printFavoriteFruit (fruit)


//

function exponent (a, b) {
    const result = a ** b;
    console.log(result);
};
// console.log(result);
exponent(3, 5);

// const exponent = (num1, num2) => {
//     for (let i = 1; i <= num2; i++) {
//       let result = Math.pow(num1, i);
//       // console.log(`${num1} ^ ${i} is ${result}`);
//     }
//   };
//   console.log(result);
  
//   exponent(2, 8);

// console.log(result)
// It's not possible to access the variable 'result'. It gives an error, called 'ReferenceError: result is not defined'. Because the variable 'result' is defined in the scope of the exponent function.
