// DOM documents object model
// get element by id / single element
// get element by class name []
// get element by tag name []/ html collection
// get element by query selector  / single element  
// get element by query selector all / [] / node list/ collection
// get element by name  
// get element by link text
// get element by partial link text 
// get element by xpath
// get element by css selector
// get element by text content
// get element by attribute
// get element by data attribute
// get element by data attribute value
// get element by data attribute name
// get element by data attribute value  
// get element by data attribute name and value

console.log(document);
let element= document.getElementsByTagName("h1");
console.log(element);
// element[0].style.color="red";
//element[0].style.color="blue";
let element1= document.getElementsByClassName("heading");
console.log(element1);
// element1[0].style.color="green";
let element2= document.getElementsByName("heading");
console.log(element2);
// element2[0].style.color="yellow";
let element3= document.querySelector("h1");
console.log(element3);
// element3.style.color="orange";
let element4= document.querySelectorAll("h1");
console.log(element4);
// element4[0].style.color="purple";
let element5= document.querySelector(".heading");       
console.log(element5);
// element5.style.color="pink";
let element6= document.querySelectorAll(".heading");
console.log(element6);  
// element6[0].style.color="brown";
let element7= document.querySelector("#heading");       
console.log(element7);
// element7.style.color="black";    
let element8= document.querySelectorAll("#heading");
console.log(element8);  
// element8[0].style.color="grey";
let element9= document.querySelector("h1.heading");
console.log(element9);
// element9.style.color="cyan";
let element10= document.querySelectorAll("h1.heading");
console.log(element10);
// element10[0].style.color="magenta";  
let element11= document.querySelector("h1#heading");
console.log(element11);
// element11.style.color="lime";

let element12= document.querySelectorAll("h1#heading");
console.log(element12);
// element12[0].style.color="olive";
let element13= document.querySelector("h1.heading#heading");    
console.log(element13);
// element13.style.color="navy";
