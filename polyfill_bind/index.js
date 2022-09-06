const name = {
  firstname: 'Mitul',
  lastname: 'Panchal',
}

const printName = function (hometown, state, country) {
  console.log(
    this.firstname + ' ' + this.lastname + ' resides in ' + hometown + ', ' + state + ', ' + country
  )
}

const printFullName = printName.bind(name, 'Mumbai', 'Maharashtra')
console.log(printFullName)
printFullName('India')

Function.prototype.mybind = function (...args) {
  let self = this
  let params = args.slice(1)
  return function (...args2) {
    self.apply(args[0], [...params, ...args2])
  }
}

const printFullName2 = printName.mybind(name, 'Surat', 'Gujarat')
console.log(printFullName2)
printFullName2('India')
