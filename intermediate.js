/*
// global scope/variable 
let age =90;
function myfun(){
    function myfun1(){
//        console.log(age);
    }
    myfun1()
}
myfun()
// local variable/scope
function myfun3(){
    let name="Sonakshi"
    function myfun4(){
        console.log(name);
    }
    myfun4()
    
}

myfun3()

// block scope
if(false){
    let age=21;
    console.log(age);
}

// lexical scope
let outerfunction=()=>{
    let name="I-TEch"
    console.log("Outer Function");
    let innerFunction =()=>{
        console.log("innerfunction");
        console.log(name);

    }
    innerFunction()
    let otherinnerfunction=()=>{
        console.log("Otherinner function");
        console.log(name);
    }
    otherinnerfunction()
    let myfunction=()=>{
        console.log("Myfunction");
        console.log(name);
    }
    myfunction()
}
outerfunction()
*/
// closure scope()
function outerFunction(){
    let name="Hii";
    console.log(name);
    function innerFunction(){
        console.log(name);
        function otherinnerfunction(){
            console.log(name);
        }
        otherinnerfunction()
    }
    return innerFunction;
}
let obj=outerFunction();
obj();

function myfun9(){
    let num=0;
    return function(){
        num ++;
        console.log(num);
    }
}
let obj2=myfun9()
for(let i=1;i<=10;i++){
obj2()
}