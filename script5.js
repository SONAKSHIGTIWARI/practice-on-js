//regex (regular expression)
//literal
let pattern1 =/Hello/
console.log(pattern1.test("Hello"));
//let string="hello this is a string hello";
//console.log(string.match(pattern1));
let string ="Hello1234asdadsd"
console.log(pattern1.test(string));

//collection of elements
// itration , upadation ,searching(linear, binary ), sorting (bubble sort)
//let numbers=[1,2,3,4,5,6,7,8,9]
//console.log(numbers);
//console.log(numbers.length);

let data =["sonakshi",94839493920,true,()=>{console.log("hii ! sonakshi");}]
data[0]=100;
console.log(data);
console.log(data[3]);


//dout
//loop(while, for), for of ,for Each, for map
let numbers=[1,2,3,4,5,6,7,8,9,10]
let marks =[1,2,3,4,5]
let index=0;
while(index<numbers.length){
    console.log(numbers[index]);
    index++;
}
let totalmarks=0
while(index<marks.length){
    totalmarks=totalmarks+marks[index];
    index++;
}
console.log(totalmarks);

for(let number of numbers){
    console.log(number);
}

