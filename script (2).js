// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

// lenghth
// push pop shift unshift | updation
// itrate

// let odd = []

// let even  = []

// let multiple_of_3 = []

// for(let i = 0 ; i < numbers.length ; i++){

//     console.log(numbers[i])
//     if(numbers[i] % 2 == 0){
//         even.push(numbers[i])
//     }else{
//         odd.push(numbers[i])
//     }

//     if(numbers[i] % 3 == 0){
//         multiple_of_3.push(numbers[i])
//     }

// }

// console.log(even)
// console.log(odd)
// console.log(multiple_of_3)

// searching and sorting

// forEach , for of, map

// numbers.forEach((number)=>{
//     // cannot return element like map function
//     console.log(number)
// })

// let printArray = (element) => {
//     console.log(element)
// }

// let squareTheArray = (element) => {
//     return element * element
// }

// // numbers.map(printArray)
// numbers.map((number)=>{
//     return number * number
// })

// let squareArray = []

// numbers.forEach((number)=>{
//     squareArray.push(number * number)
// })

// console.log(squareArray)

// let newSquareArray = numbers.map((number)=>{
//     return number * number * number
//     // return a new array 
// })

// console.log(newSquareArray)

// numbers.map((number)=>{
//     // statement
//     // returns a new array
// })

// let newArray = []

// for(let i = 0 ; i < numbers.length ; i ++){
//     newArray.push(numbers[i] * numbers[i])
// }

// console.log(newArray)

// for of

// for(let number of numbers){
//     newArray.push(number * number)
// }

// console.log(newArray)

// filter(searching), sort |  returns the new array
// binary, linear | bubble sort, selection sort, insertion sort

// 2-D - matrix

// 5 , 1  , 3, 2, 4 - 1,2,3,4,5
// a e b f g i - a b e f g i | ACSII | A 65 a 97 shift 32

// let numbers = [2,4,6,8,10]

// let odd = null

// // filter method will return a new array in which element are validated from the condition

// // if no element matched the condition filter method will return an empty array

// // an empty array is not false

// odd = numbers.filter((number)=>{
//     return number % 2 != 0
// })

// console.log(odd)

// let students = [1,2,3,4,5,6,7]

// let searchRollNumber = prompt("Enter roll number to search !")

// let result = students.filter((student)=>{
//     return student == searchRollNumber
// })

// if(result.length != 0){
//     console.log("student found")
// }else{
//     console.log("student not found")
// }

// let numbers = [5, 2, 1, 3, 4]

// let result = numbers.sort()

// console.log(result)
// sorting

// with compare function
// let result = numbers.sort((prev, next) => {
//     return prev - next
//     return next - prev
// })

// prev - next = -
// 5 - 2 = 3
// 2 - 5 = -3

// console.log(result)

// let chars = ["b", "e", "a", "c", "d"]

// let result = chars.sort()

// console.log(result)

// (a,b)=>{
//     return a - b
// }

// object
// we create relational data in objects

// key : value comma seprated

// let student = {
//     name: "amey khondekar",
//     roll: 12,
//     contact: 9766696550,
//     address: "sakkaradhara",
//     section: "FSD7AM",
//     doSomething: () => {
//         console.log("doing something !")
//     },
//     subject: ["Maths", "Science", "English"],
//     regular: true
// }

// for (let key in student ){
//     console.log(student[key])
// }

// let [a,b,c] = [1,2,3]

// console.log(a)

// // member access oprator " . "

// student.regular = false

// console.log(student.name)
// console.log(student.roll)
// console.log(student.address)
// console.log(student.contact)
// console.log(student.section)
// console.log(student.subject)
// console.log(student.regular)

// student.doSomething()

// array of objects

// let students = [
//     {
//         name: "student 1",
//         roll: 1,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 85
//     },
//     {
//         name: "student 2",
//         roll: 2,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 88
//     },
//     {
//         name: "student 3",
//         roll: 3,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 60
//     },
//     {
//         name: "student 4",
//         roll: 4,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 55
//     },
//     {
//         name: "student 5",
//         roll: 5,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 95
//     },
//     {
//         name: "student 6",
//         roll: 6,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 82
//     },
//     {
//         name: "student 7",
//         roll: 7,
//         contact: 9766696550,
//         address: "sakkaradhara",
//         section: "FSD7AM",
//         mark : 25
//     }
// ]

// console.log(students)

// students.forEach(student=>{
//     console.log(student.roll)
// })

// let result = students.filter(student=>{
//     return student.name == "student 1"
// })

// console.log(result)

// let sortedArray = students.sort((prevStudent,nextStudent)=>{
//     return  nextStudent.mark - prevStudent.mark
// })

// console.log(sortedArray)

// for(let student of sortedArray ){
//     console.log(student.name)
// }

// // grading

// for(let student of students ){
    
//     if(student.mark >= 80){
//         student.grade = "A"
//     }else if(student.mark >= 60 && student.mark <= 80){
//         student.grade = "B"
//     }else{
//         student.grade = "C"
//     }
// }

// console.log(students)

// string manipulation

let str1 = "123"

// lenghth
console.log(str1.length)

// remove the spaces from the string leading and trailing porttions
str1 = str1.trim()

console.log(str1.length)

// indexing in string
// str1.charAt(index)

// console.log(str1.charAt(19))
// str1.indexOf("char")
// it will return in index number of charchter if exists else return -1
// it will also return the first occurence of the charchter present in the string

// console.log(str1.indexOf("s"))
// console.log(str1.lastIndexOf("s"))

// console.log(str1.startsWith("was"))
// console.log(str1.endsWith(" "))

// let str2 = " this is also a string string2"

// str1 = str1.concat(str2)

// console.log(str1)

// change the case of the string | upper and lower

// console.log(str1)

// str1 = str1.toLowerCase()
// str1 = str1.toUpperCase()

// console.log(str1)

// can replace only the first occurene
// str1 = str1.replace("THIS","THAT")

// replace all occurene
// str1 = str1.replaceAll("this","THAT")

// console.log(str1)

// slice and substring
// divide into small parts based of indexes

// str1.slice(startingIndex,endingIndex)

// let fname = str1.slice(0,4)

// return a section of the string
// let fname = str1.slice(0,str1.indexOf(" "))

// will not update the original string
// rest is same
// let fname = str1.substring(0,4)
// console.log(fname)

// let re = /[a-z][A-Z]/

// let result = str1.match(re)

// console.log(result)

// toString()
// String()

// reverse of string

// name sperator

// change first letter of the word in a string

// this is some changes