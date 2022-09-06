//Calculate Mean of a given array
const arrayList = [9, 17, 23, 10, 19, 18, 6, 5]
const arrayOddList = [9, 17, 23, 10, 19, 18, 6, 4, 5]

const calculateMean = (arr) => {
  let sum = arr.reduce((acc, value) => acc + value, 0)
  let len = arr.length
  return sum / len
}

//console.log(calculateMean(arrayList))

const calculateMedian = (arr) => {
  const isEven = arr.length % 2 === 0
  const sortedArr = arr.sort((a, b) => a - b)
  return isEven
    ? (sortedArr[arr.length / 2 - 1] + sortedArr[arr.length / 2]) / 2
    : sortedArr[Math.floor(arr.length / 2)]
}
console.log(calculateMedian(arrayList))
console.log(calculateMedian(arrayOddList))
