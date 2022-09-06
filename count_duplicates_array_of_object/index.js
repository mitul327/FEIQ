const arr = ['one', 'two', 'one', 'one', 'two', 'three']

// using forEach
/* const count = {}
arr.forEach((element) => {
  count[element] = (count[element] || 0) + 1
}) */

//using ES6 reduce method

const count = arr.reduce((acc, value) => {
  return { ...acc, [value]: (acc[value] || 0) + 1 }
}, {})

console.log(count)
