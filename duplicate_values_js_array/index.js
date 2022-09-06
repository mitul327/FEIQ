const names = ['Mitul', 'Priyanka', 'Rahul', 'Pratik', 'Divyanxi', 'Mitul']

function getUnique(names) {
  const uniqueArray = []
  for (const name of names) {
    if (uniqueArray.indexOf(name) === -1) {
      uniqueArray.push(name)
    }
  }
  return uniqueArray
}

const uniqueNames = getUnique(names)
console.log(uniqueNames)
