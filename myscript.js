/*/
let data=1234;
console.log(data);
console.log(1234);
console.log(true);
console.log("hello js!");
//arithmatic operations://
let num1=40;
let num2=90;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
// information
let string1="Hi,"
let string2="i'm kalpana"
let age=20;
let info="i am java developer"
console.log(string1+string2+ " "+"my age is"+ age+" "+ info);
// by input statements
let string3="i'am";
let name=prompt("Enter your name:")
let userage=prompt("Enter your current age");
let skills=prompt("Enter your skills:");
console.log(string1+string3+" "+name+" "+"my age is"+" "+ userage+" "+"i am"+" "+skills+" " +"developer");

// input number//
let a=prompt("Enter first number:");
let b=prompt("Enter second number:");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
*/

//let data1=1233;
//console.log(1233);
//console.log(data1);
//let string="hello js"
//console.log(string);
//console.log(true);
//console.log(false);
//let num=Number(prompt("Enter 1st number"));
//let num1=prompt("Enter 2nd number");
//num1=Number(num1);
//console.log(num+num1);
//type casting
// number->string
//number->boolean

//string->number
//string ->boolean

// boolean->number
// boolean->string

// 1st conversion number to string
let val=1234;
console.log("Before the typecasting:"+" "+ typeof(val)+": "+val);
val=String(val);
console.log("After the typecasting:"+" "+ typeof(val)+" :"+val);

//2nd conversion number to boolean
let val1=12;
console.log("Before the typecasting:"+" "+ typeof(val1)+": "+val1);
val1=Boolean(val1);
console.log("After the typecasting:"+" "+ typeof(val1)+" :"+val1);

//3rd conversion string to number
let val2="hello js";
console.log("Before the typecasting:"+" "+ typeof(val2)+": "+val2);
val2=Number(val2);
console.log("After the typecasting:"+" "+ typeof(val2)+" :"+val2);

//4th conversion string to boolean
let val3="hello js";
console.log("Before the typecasting:"+" "+ typeof(val3)+": "+val3);
val3=Boolean(val3);
console.log("After the typecasting:"+" "+ typeof(val3)+" :"+val3);

let val6="";
console.log("Before the typecasting:"+" "+ typeof(val6)+": "+val6);
val6=Boolean(val6);
console.log("After the typecasting:"+" "+ typeof(val6)+" :"+val6);

//5th conversion  boolean to number
let val4=true;
console.log("Before the typecasting:"+" "+ typeof(val4)+": "+val4);
val4=Number(val4);
console.log("After the typecasting:"+" "+ typeof(val4)+" :"+val4);

let val5=false;
console.log("Before the typecasting:"+" "+ typeof(val5)+": "+val5);
val5=Number(val5);
console.log("After the typecasting:"+" "+ typeof(val5)+" :"+val5);

//6th conversion  boolean to string
let val7=true;
console.log("Before the typecasting:"+" "+ typeof(val7)+": "+val7);
val7=String(val7);
console.log("After the typecasting:"+" "+ typeof(val7)+" :"+val7);

