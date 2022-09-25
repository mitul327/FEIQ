/* const arr = [
  {
    Country: 'BR',
    'New Lv1−Lv2': '#N/A',
  },
  {
    Country: 'BR',
    'New Lv1−Lv2': '#N/A',
  },
  {
    Country: '',
    'New Lv1−Lv2': 'test',
  },
] */
const array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 1, y: 2 },
  { x: 3, y: 12 },
]
const convert = (arr) => {
  const res = {}
  arr.forEach((obj) => {
    const key = `${obj.x}${obj.y}`
    if (!res[key]) {
      res[key] = { ...obj, count: 0 }
    }
    res[key].count += 1
  })
  return Object.values(res)
}
console.log(convert(array))
