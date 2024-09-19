interface IPerson {
    name: string;
    lastName: string;
    age: number;
}

let person: IPerson = {
    name: 'Edwin Yoner',
    lastName: 'Flores Rupay',
    age: 30
} 

console.log(person);

// Usar la Interfaz en una Función
function greet(person: IPerson): string {
    return `Hello, ${person.name} ${person.lastName}, you are ${person.age} years old.`;
}

console.log(greet(person));

// Array de Objetos que Implementan la Interfaz
let people: IPerson[] = [
    { name: "John", lastName: "Doe", age: 30 },
    { name: "Jane", lastName: "Smith", age: 25 }
];

people.forEach(person => {
    console.log(greet(person));
});

// Extender la Interfaz
interface IEmployee extends IPerson {
    jobTitle: string;
}

let employee: IEmployee = {
    name: "Edwin Yoner",
    lastName: "Flores Rupay",
    age: 30,
    jobTitle: "Software Developer"
};

console.log(`Employee: ${employee.name} ${employee.lastName}, Age: ${employee.age}, Job Title: ${employee.jobTitle}`);


export {}