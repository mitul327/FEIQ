const date1 = new Date('06/30/2022')
const date2 = new Date('07/30/2022')
const difference_in_time = date2.getTime() - date1.getTime()

const difference_in_days = difference_in_time / (1000 * 3600 * 24)

console.log('Total number of days between dates are ', difference_in_days)
