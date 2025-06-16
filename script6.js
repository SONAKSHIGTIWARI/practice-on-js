// syntax  -> for of 
let numbers=[1,2,3,4,5,6,7,8,9]
for(number of numbers){
//    console.log(number);
}
// array.forEach((element, index)=>{ }
numbers.forEach((number, index)=>{
//    console.log(number**3);
})
let student ={
    name:"Kalpana Kumari",
    phone:9087645332,
    email:"kalpana123@gmail.com",
    marks:[40,45,41,43,39],
    grade:null
}
let student2 ={
    name:"Pravin Kumar",
    phone:8077645332,
    email:"pravin3@gmail.com",
    marks:[30,35,31,40,33],
    grade:null
}
//console.log(student.name);
//console.log(student.phone);
//console.log(student.marks);

//let totalmarks =(student2.marks[0]+student2.marks[1]+student2.marks[2]+student2.marks[3]+student2.marks[4])
//let percentage=totalmarks/5
//if (percentage >=90){
//    student.grade="A++"
//}else if (percentage <90 && percentage >= 80){
//    student.grade="A"
//}else if (percentage <80 && percentage >= 70){
//    student.grade="B++"
//}else if (percentage <70 && percentage >= 65){
//    student.grade="B"
//}else{
//    student.grade="fail"
//}
//console.log(student.grade);

let assignGrade = (student)=>{
    let totalMarks=0
    let percentage=0
    student.marks.forEach((marks) => {
        totalMarks+= marks
    })
    percentage=totalMarks/2.5
    let totalmarks =(student2.marks[0]+student2.marks[1]+student2.marks[2]+student2.marks[3]+student2.marks[4])
    if (percentage >=90){
        student.grade="A++"
        student.percentage=percentage
    }else if (percentage <90 && percentage >= 80){
        student.grade="A"
        student.percentage=percentage
    }else if (percentage <80 && percentage >= 70){
        student.grade="B++"
        student.percentage=percentage
    }else if (percentage <70 && percentage >= 65){
        student.grade="B"
        student.percentage=percentage
    }else{
        student.grade="fail"
        student.percentage=percentage
    }

}

let students = [
    {
        name: "Amey Khondekar",
        phone: 9766696550,
        email: "ameykhondekar01@gmail.com",
        marks: [35, 35, 40, 44, 23],
        grade: null
    },
    {
        name: "Om Kumar",
        phone: 8857032120,
        email: "omkumar01@gmail.com",
        marks: [25, 30, 45, 44, 23],
        grade: null,
        percentage:null
    },
    {
        name: "Riya Sharma",
        phone: 9876543210,
        email: "riyasharma12@gmail.com",
        marks: [40, 42, 38, 35, 39],
        grade: null,
        percentage:null
    },
    {
        name: "Aman Verma",
        phone: 9123456789,
        email: "amanverma21@gmail.com",
        marks: [32, 30, 25, 28, 34],
        grade: null,
        percentage:null
    },
    {
        name: "Sneha Patil",
        phone: 9988776655,
        email: "snehapatil01@gmail.com",
        marks: [44, 46, 41, 43, 45],
        grade: null,
        percentage:null
    },
    {
        name: "Yash Raj",
        phone: 9012345678,
        email: "yashraj09@gmail.com",
        marks: [30, 35, 32, 28, 31],
        grade: null,
        percentage:null
    },
    {
        name: "Tanya Mehta",
        phone: 9812345678,
        email: "tanyamehta04@gmail.com",
        marks: [37, 36, 34, 39, 38],
        grade: null,
        percentage:null
    },
    {
        name: "Ankit Joshi",
        phone: 9654321870,
        email: "ankitjoshi10@gmail.com",
        marks: [28, 25, 30, 27, 26],
        grade: null,
        percentage:null
    },
    {
        name: "Kavya Nair",
        phone: 9871234567,
        email: "kavyanair03@gmail.com",
        marks: [45, 44, 42, 41, 43],
        grade: null,
        percentage:null
    },
    {
        name: "Rohit Sen",
        phone: 9345612789,
        email: "rohitsen11@gmail.com",
        marks: [31, 33, 30, 29, 32],
        grade: null,
        percentage:null
    },
    {
        name: "Isha Desai",
        phone: 9823567890,
        email: "ishadesai05@gmail.com",
        marks: [38, 37, 36, 35, 34],
        grade: null,
        percentage:null
    },
    {
        name: "Karan Malhotra",
        phone: 9966543210,
        email: "karanmalhotra07@gmail.com",
        marks: [22, 25, 20, 23, 24],
        grade: null,
        percentage:null
    },
    {
        name: "Meena Reddy",
        phone: 9445566778,
        email: "meenareddy06@gmail.com",
        marks: [41, 40, 43, 42, 39],
        grade: null,
        percentage:null
    },
    {
        name: "Aditya Jain",
        phone: 9398765432,
        email: "adityajain09@gmail.com",
        marks: [29, 28, 30, 26, 27],
        grade: null,
        percentage:null
    },
    {
        name: "Priya Singh",
        phone: 9811223344,
        email: "priyasingh08@gmail.com",
        marks: [33, 35, 36, 37, 32],
        grade: null,
        percentage:null
    },
    {
        name: "Nikhil Choudhary",
        phone: 9785612345,
        email: "nikhilc04@gmail.com",
        marks: [39, 40, 41, 38, 37],
        grade: null,
        percentage:null
    },
    {
        name: "Divya Agarwal",
        phone: 9867432190,
        email: "divyaagarwal02@gmail.com",
        marks: [44, 45, 43, 42, 46],
        grade: null,
        percentage:null
    },
    {
        name: "Arjun Das",
        phone: 9765432109,
        email: "arjundas06@gmail.com",
        marks: [31, 30, 29, 28, 27],
        grade: null,
        percentage:null
    },
    {
        name: "Pooja Bhatt",
        phone: 9900887766,
        email: "poojabhatt03@gmail.com",
        marks: [36, 38, 39, 37, 35],
        grade: null,
        percentage:null
    },
    {
        name: "Varun Kapoor",
        phone: 9334455667,
        email: "varunkapoor11@gmail.com",
        marks: [24, 26, 28, 25, 27],
        grade: null,
        percentage:null
    },
    {
        name: "Neha Saxena",
        phone: 9643567890,
        email: "nehasaxena07@gmail.com",
        marks: [42, 40, 43, 41, 44],
        grade: null,
        percentage:null
    },
    {
        name: "Sahil Thakur",
        phone: 9812349801,
        email: "sahilthakur02@gmail.com",
        marks: [34, 35, 32, 30, 31],
        grade: null,
        percentage:null
    }
];
students.map(assignGrade)
 students.sort((next, prev)=>{
    return prev.percentage-next.percentage
 })

// students.map(assignGrade)
// students.sort((next, prev)=>{
//    return next.percentage-prev.percentage
// })
 console.log(students);

//students.splice(index,deletcount,Element,...)
students.splice(1,4,{name:"new stud"})
console.log(students
);
//sorting
//numbers.sort((next,prev)=>{
//    return next-prev
//})

numbers.sort((next,prev)=>{
    return prev-next
})
console.log(numbers);

