const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sum = arrayList.reduce((acc, values) => {
  return acc + values
}, 0)

console.log(sum)
