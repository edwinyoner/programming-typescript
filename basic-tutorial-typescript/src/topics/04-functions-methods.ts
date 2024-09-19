// Funciones
// Funciones Básicas
let num1: number;
let num2: number;
num1 = 5;
num2 = 10;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

console.log(`La suma de ${num1} + ${num2} =`, add(num1, num2));
console.log(`La resta de ${num1} - ${num2} =`, subtract(num1, num2));

// Funciones Anónimas
const multiply = function(num1: number, num2: number): number{
    return num1 * num2;
}
console.log(`La multiplicación de ${num1} * ${num2} =`, multiply(num1, num2));

// Funciones Flecha
const subtract1 = (a: number, b: number): number => {
    return a - b;
};

// Función flecha con return implícito
const divide = (a: number, b: number): number => a / b;

console.log(subtract1(10, 6)); // 4
console.log(divide(10, 2)); // 5


function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(5)); // 5
console.log(identity<string>('Hello')); // Hello


class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.multiply(4, 5)); // 20
console.log(calculator.subtract(10, 3)); // 7


