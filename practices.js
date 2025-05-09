let date = new Date()

date.setDate(5)
date.setMonth(5)
date.setFullYear(2026)
date.setHours(0)
date.setMinutes(0)
date.setSeconds(0)
date.setMilliseconds(0)

date.properties & date.methods

console.log(date.getDate())
// starting from 0
console.log(date.getMonth())
console.log(date.getFullYear())
// starting from 1
console.log(date.getDay())
console.log(date.getTime())

// getter & setter (contructor) 

console.log(date.getTimezoneOffset())

console.log(date.toTimeString())
console.log(date.toLocaleTimeString())
console.log(date.toDateString())
console.log(date.toLocaleDateString())

