// Destructuración básica de objetos
const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

const { name, age, job } = person;

console.log(name); // John
console.log(age);  // 30
console.log(job);  // Developer

// Destructuración con alias
const { name: personName, age: personAge } = person;

console.log(personName); // John
console.log(personAge);  // 30

// Destructuración anidada
const employee = {
    id: 1,
    name: "Alice",
    position: {
        title: "Manager",
        department: "Sales"
    }
};

const { name: employeeName, position: { title, department } } = employee;

console.log(employeeName); // Alice
console.log(title);        // Manager
console.log(department);   // Sales


// Destructuración básica de arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

// Ignorar algunos valores
const [one, , three] = numbers;

console.log(one);   // 1
console.log(three); // 3

// Usar el operador rest
const [firstNum, ...restOfNumbers] = numbers;

console.log(firstNum);      // 1
console.log(restOfNumbers); // [2, 3, 4, 5]
