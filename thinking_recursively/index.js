let user = {
  name: 'Mitul Panchal',
  address: {
    personal: {
      city: 'Mumbai',
      state: 'Maharashtra',
      area: 'Dahisar',
    },
    office: {
      city: 'Mumbai',
      area: {
        landmark: 'Hub Mall',
      },
    },
  },
}
let magic = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      magic(obj[key], parent + '_' + key, finalObj)
    } else {
      finalObj[parent + '_' + key] = obj[key]
    }
  }
}

let finalObj = {}
magic(user, 'user', finalObj)

console.log(finalObj)
