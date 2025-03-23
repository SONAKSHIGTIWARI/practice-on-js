// Array Operations in JavaScript

let numbers = [10, 20, 30, 40, 50];

// 1. Add an element at the end (push)
numbers.push(60);
console.log("After push:", numbers);

// 2. Remove the last element (pop)
numbers.pop();
console.log("After pop:", numbers);

// 3. Add an element at the beginning (unshift)
numbers.unshift(5);
console.log("After unshift:", numbers);

// 4. Remove the first element (shift)
numbers.shift();
console.log("After shift:", numbers);

// 5. Find an element (indexOf)
console.log("Index of 30:", numbers.indexOf(30));

// 6. Check if an element exists (includes)
console.log("Includes 40:", numbers.includes(40));

// 7. Slice (Get a portion of the array)
let sliced = numbers.slice(1, 3);
console.log("Sliced array:", sliced);

// 8. Splice (Remove elements from the array)
numbers.splice(2, 1); // Removes 1 element at index 2
console.log("After splice:", numbers);

// 9. Map (Transform elements)
let doubled = numbers.map(num => num * 2);
console.log("Doubled values:", doubled);

// 10. Filter (Get elements based on condition)
let filtered = numbers.filter(num => num > 20);
console.log("Filtered values:", filtered);

// 11. Reduce (Accumulate values)
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of array:", sum);

// 12. Sorting (Ascending)
numbers.sort((a, b) => a - b);
console.log("Sorted array:", numbers);

// 13. Reverse
numbers.reverse();
console.log("Reversed array:", numbers);


// 1. Creating a string
let str = "Hello, JavaScript!";

// 2. Length of a string
console.log(str.length); // Output: 18

// 3. Convert to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"

// 4. Convert to lowercase
console.log(str.toLowerCase()); // Output: "hello, javascript!"

// 5. Extract part of a string (substring)
console.log(str.substring(0, 5)); // Output: "Hello"

// 6. Extract part of a string (slice)
console.log(str.slice(7, 17)); // Output: "JavaScript"

// 7. Replace part of a string
console.log(str.replace("JavaScript", "World")); // Output: "Hello, World!"

// 8. Check if string contains a word
console.log(str.includes("JavaScript")); // Output: true

// 9. Split string into an array
let words = str.split(" ");
console.log(words); // Output: [ 'Hello,', 'JavaScript!' ]

// 10. Remove whitespace from start and end
let spacedStr = "   Hello!   ";
console.log(spacedStr.trim()); // Output: "Hello!"

// 11. Find index of a substring
console.log(str.indexOf("JavaScript")); // Output: 7

// 12. Repeat a string multiple times
console.log("Ha! ".repeat(3)); // Output: "Ha! Ha! Ha! "

// 13. Check if a string starts with a specific word
console.log(str.startsWith("Hello")); // Output: true

// 14. Check if a string ends with a specific word
console.log(str.endsWith("!")); // Output: true

// 15. Convert a number to a string
let num = 123;
console.log(num.toString()); // Output: "123"
