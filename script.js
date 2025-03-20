function outer() {
    let counter = 0;
  
    return function inner() {
      counter++;
      console.log(counter);
    };
  }
  
  const increment = outer();
  increment(); 
  increment(); // 2


// Using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data fetched'), 2000);
    });
  }
  
  fetchData()
    .then(response => console.log(response))
    .catch(error => console.log(error));
  
  // Using Async/Await
  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
getData();

// Object Destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;

console.log(name); // John
console.log(age);  // 30
console.log(city); // New York

// Array Destructuring
const numbers = [1, 2, 3];
const [a, b] = numbers;

console.log(a); // 1
console.log(b); // 2

  