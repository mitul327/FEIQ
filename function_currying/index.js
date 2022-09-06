//Currying refers to the process of transforming a function with multiple arity(arguments) into the same function with less arity.
//The curried effect is achieved by binding some of the arguments to the first function invoke,
//so that those values are fixed for the next invocation.

/* const multiply = function(x, y) { //currying using bind method
    console.log(x*y)
} */

/* const multiplyByTwo = multiply.bind(this, 3);
multiplyByTwo(7);

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(8);
 */

const multiply = function(x) { // currying using function closures
    return function(y) {
        console.log(x*y)
    }
}


const multiplyByTwo = multiply(2);
multiplyByTwo(7);

const multiplyByThree = multiply(2);
multiplyByThree(1);
