/*  const sum = function(a) {
    return function(b) {
        if(b) {
            return sum(a + b);
        }
        return a;
    }
} */

const sum = (a) => (b) => b ? sum(a + b) : a //ES6 Arrow functions

console.log(sum(1)(2)(3)(4)())
