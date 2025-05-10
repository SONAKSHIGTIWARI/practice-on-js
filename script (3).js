// document (html) object model manipulate (properties(color) methods(redirect, submit) attributes(value,class,style))

console.log(document)

// target the element/s

// by tagname, classname, id & combinator

// document.getElementsByTagName()
// will return a array
// document.getElementsByClassName()
// will return a array
// document.getElementById()
// will return a single element
// document.querySelector(combinator)
// will return a single element | first occurence
// document.querySelectorAll(combinator)
// will return a array

// an empty array is not false
// null is is false

// let elementsA = document.getElementsByTagName("h1")

// let elementsB = document.getElementsByClassName("first")

// let elementsC = document.getElementById("i1")

// let elementsD = document.querySelector("h1")

// let elementsE = document.querySelectorAll("h1")

// let elementsD = document.querySelector(".first")

// let elementsE = document.querySelectorAll(".first")

// let elementsD = document.querySelector("#i1")

// let elementsE = document.querySelectorAll("#i1")

// let elementsD = document.querySelector("div.first#i1 > h1")

// console.log(elementsD)

// console.log(elementsE)

// console.log(elementsC)

// if(elementsC){
//     console.log("yes there are element/s")
// }else{
//     console.log("no there are no element/s")
// }


// get,set

// (innerText, innerHTML)properties , style

// console.log(document.getElementById("i1").innerText) 

// document.getElementById("i1").innerText = "this text is from js" 

// document.getElementById("i1").innerText = document.getElementById("i1").innerText + " this text is from js" 

// if we call this line we will get null because this element is yet to be created
// console.log(document.getElementById("i5"))

// console.log(document.getElementById("i1").innerHTML)

// document.getElementById("i1").innerHTML = "<div id='i5'> <h1>This H1 is from js </h1> <h1>This H1 is from js 2 </h1> <img src='https://picsum.photos/200/300' alt='random image'/> </div>"

// console.log(document.getElementById("i2").innerHTML)
// console.log(document.getElementById("i2").innerText)


// document.getElementById("i1").innerHTML = "<h1>This is js</h1>"


// console.log(document.getElementById("i1").innerHTML)

let students = [ {name : "stud 1" , phone : 123465} , {name : "stud 2" , phone : 123465} , {name : "stud 3" , phone : 123465}  ]

let table = document.getElementById("students")

console.log(table.innerHTML)

// table.innerHTML = `<tr> <td>${students[0].name}</td> <td>${students[0].phone}</td>  </tr> <tr> <td>${students[1].name}</td> <td>${students[1].phone}</td>  </tr> <tr> <td>${students[2].name}</td> <td>${students[2].phone}</td>  </tr>`