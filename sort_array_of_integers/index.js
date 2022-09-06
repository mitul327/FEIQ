const numbers = [1, 5, 12, 3, 7, 15, 9]

numbers.sort()
console.log(numbers)

numbers.sort((a, b) => {
  return b - a
})
console.log(numbers)
