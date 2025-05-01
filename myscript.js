// Task

//Take 2 number as user input and perform arithmetic operation..
let a=Number(prompt("Enter first number:"));
let b=Number(prompt("Enter second number:"));
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// grater of (2/3/4)number using logical operator
let num11=Number(prompt("Enter First number!"));
let num12=Number(prompt("Enter Second number"));
if (num11>num12){
    console.log("1st number is greater");
}
else{
    console.log("Second number is greater");
}

// among 3 numbers
let p=Number(prompt("Enter the value of p"));
let q=Number(prompt("Enter the value of q"));
let r=Number(prompt("Enter the value of r"));

if(p>q && p>r){
    console.log("p is greater");
}
else{
    if(q>p && q>r){
        console.log("q is greater");
    }
    else{
        console.log("r is greater");;
    }
}
 
// among 4 humber
let w=Number(prompt("Enter the value of w"));
let x=Number(prompt("Enter the value of x"));
let y=Number(prompt("Enter the value of y"));
let z=Number(prompt("Enter the value of z"));
if(w>x && w>y && w>z){
    console.log("w is greater");
}
else{
    if(x>w && x>y && x>z){
        console.log("x is greater");
    }
    else{
        if(y>w && y>x && y>z){
            console.log("y is greater");
        }
        else{
            console.log("z is greater");
        }
    }
}
// make 3 menu driven program
// 1. calculator
let choice = prompt("Calculator Menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let result;

switch (choice) {
  case "1":
    result = num1 + num2;
    alert("Result: " + result);
    break;
  case "2":
    result = num1 - num2;
    alert("Result: " + result);
    break;
  case "3":
    result = num1 * num2;
    alert("Result: " + result);
    break;
  case "4":
    if (num2 !== 0) {
      result = num1 / num2;
      window.alert("Result: " + result);
    } else {
      alert("Cannot divide by zero.");
    }
    break;
  default:
    alert("Invalid choice.");
}
// 2. Day of the Week Finder
let dayNumber = prompt("Enter a number (1-7) to get the day of the week:");

switch (dayNumber) {
  case "1":
    alert("Sunday");
    break;
  case "2":
    alert("Monday");
    break;
  case "3":
    alert("Tuesday");
    break;
  case "4":
    alert("Wednesday");
    break;
  case "5":
    alert("Thursday");
    break;
  case "6":
    alert("Friday");
    break;
  case "7":
    alert("Saturday");
    break;
  default:
    alert("Invalid number. Enter 1 to 7.");
}

// 3 simple grade checker

let grade = prompt("Enter your grade letter (A, B, C, D, F):").toUpperCase();

switch (grade) {
  case "A":
    alert("Excellent!");
    break;
  case "B":
    alert("Very Good");
    break;
  case "C":
    alert("Good");
    break;
  case "D":
    alert("Needs Improvement");
    break;
  case "F":
    alert("Failed");
    break;
  default:
    alert("Invalid grade.");
}

//Leap year chekar.

let year = prompt("Enter a year:");
if (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(year + " is a leap year.");
  } else {
    alert(year + " is not a leap year.");
  }
} else {
  alert("No year entered!");
}

//grading  based  on marks using  conditional statments

let score = Number(prompt("Enter your score:"));
if (score >= 90) {
    console.log("Grade:A");
} else if (score >= 80) {
  console.log("Grade:B");
} else if (score >= 70) {
  console.log("Grade:C");
} else if (score >= 60) {
  console.log("Grade:D");
} else {
  console.log("you are Fail");
}

//conditional using  ternary statement

let evennumber=Number(prompt("Enter the number to check even or odd"));
(evennumber%2==0)? console.log("Number is even") : console.log("Number is odd");

// create number list (number of range) even number

 i =1
while(i<=100){
  if(i %2==0){
    console.log(i);
  }
  i++;
}

// create number list (number of range) odd  number

let i =1;
while(i<=100){
  if(i %2==1){
    console.log(i);
  }
  i++;
}

// create number list (number of range) multiple of 3

i =1
while(i<=100){
  if(i %3==0){
    console.log(i);
  }
  i++;
}

// count using while loop(no.of leap year from a range)

let years=1000;
while(years<=2050){
  if (years) {
    if ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0)) {
      console.log(years + " is a leap year.");
    } else {
     console.log(years + " is not a leap year.");
    }
  } else {
    console.log("No year entered!");
  }
  years++;
}

// factorial using using while loop

let num=5;
let fact=1;
while(num >=1){
  if(num>0){
    fact=fact*num;
  }
  num--;
} 
console.log("factorial is:" + fact);

// sum of digit using  while loop

let sum1=0
let j=1;
while(i<=10){
  if(i>0){
    sum1 += j
  }
  j++;
}
console.log("Sum of number:" + sum);

// armstrong strong number using while loop 

let sum=0;
let number=1;
let temp=number;
while(number<=1000){
    while(temp>0){
        let remainder = temp %10;
        sum += remainder*remainder *remainder;
        temp= parseInt(temp/10);
    }

}
if(sum==number){
    console.log(number);
}

// Do you  wish to continue
do{
    console.log("welcome")
    choice = window.confirm("do you wish to continue")
  
  }while(choice == true)
console.log("program completed !")
  