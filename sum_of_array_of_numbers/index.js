/* const array = [1, 2, 3, 4, 5];

//Using reduce function
const sum = array.reduce(function(a, b) {  //a => Total Value     b=> Current Value
    return a + b;
}, 0)                       // 0 is initial value

console.log(sum);
 */
// Using Traditional For Loop
/* function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
} */

// Using forEach Loop
function sumArray(arr) {
  let sum = 0
  arr.forEach((item) => {
    sum += item
  })
  return sum
}

//Using for of(ES6) loop
function sumArray(arr) {
  let sum = 0
  for (const item of arr) {
    sum += item
  }
  return sum
}

console.log(sumArray([1, 4, 5, 6, 8, 9]))
