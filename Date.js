// to use the date class i.e. the properties and methods 
// we have to create a date object

// let date = new Date()
// using date class contructor
// yyyy-mm-ddThours:minutes:seconds
// let date = new Date("2024-12-05T00:00:00")

let date = new Date()

date.setDate(5)
date.setMonth(5)
date.setFullYear(2026)
date.setHours(0)
date.setMinutes(0)
date.setSeconds(0)
date.setMilliseconds(0)

// date.properties & date.methods

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

let student = {
    admitDate : new Date().toDateString()
}

console.log(student.admitDate)

// use to date class is to give timestamp at a created data for a database

// // Math

// // property 

// // console.log(typeof(Math.PI.toFixed(3)))
// // console.log(typeof(Math.PI))
// // console.log(Math.SQRT2)
// // console.log(Math.SQRT1_2)
// // console.log(Math.LOG10E)

// // .toFixed(n)

// // methods

// // .5 > value = 0 (floor)
// // .5 < value = 1 (ceil)

// let number = 10.000000000001
// let number2 = 10.99999999

// let number3 = 10.55

// console.log(Math.ceil(number))
// console.log(Math.floor(number2))

// console.log(Math.round(number3))

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

// console.log(Math.max(1,2,3,4,5))
// console.log(Math.min(1,2,3,4,5))

// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))

// // ... spread oprator
// // can be used to de-structure an array

// // de-structure of an object

// console.log(numbers)
// console.log(...numbers)

// let [a,b,c,d] = [1,2,3,4]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// console.log(Math.sqrt(16))
// console.log(Math.sqrt(64))
// console.log(Math.cbrt(64))
// console.log(Math.cbrt(27))
// console.log(Math.cbrt(8))

// // Math.pow(number, power)

// console.log(Math.pow(8,3))
// console.log(Math.pow(8,3))

// yyyy-mm-dd
console.log(Math.floor(((Math.random() * 6)+1)))
console.log(Math.floor(((Math.random() * 6)+1)))
console.log(Math.floor(((Math.random() * 6)+1)))
console.log(Math.floor(((Math.random() * 6)+1)))
console.log(Math.floor(((Math.random() * 6)+1)))

 built in objects// Date , Math// date// syntax for date objectslet date = new Date()// let date = new Date()// setter / getter@@ -37,17 +37,17 @@// console.log(date.toLocaleDateString())// console.log(date.toLocaleTimeString())let date1 = new Date("2025-05-25")// let date1 = new Date("2025-05-25")let date2 = new Date("2025-05-07")// creating custom date using contructor methods/function// let date2 = new Date("2025-05-07")// // creating custom date using contructor methods/function// yyyy-mm-dd// // yyyy-mm-ddif(date1.getTime() < date2.getTime()){    console.log("date 2 is latest !")    console.log(date2.toLocaleDateStrin