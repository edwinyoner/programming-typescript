// number, string, boolean, Date, any

//#region NUMBER
console.log('***********************');
console.log('********NUMBER*********');
console.log('***********************');

const age = 15;
let weight = 70.5;
let weight2: number;

weight = 80;
weight2 = 74.5;

console.log(age);
console.log(weight);
console.log(weight2);

const ageText = '31';
const ageInt = parseInt(ageText);
console.log("parseInt => ", ageInt);

const weightText = '50.5';
const weightFloat = parseFloat(weightText);
console.log("parseFloat => ", weightFloat);

const weightNumber = Number(weightText);
console.log("Number => ", weightNumber);
//#endregion

//#region STRING
console.log('***********************');
console.log('********STRING*********');
console.log('***********************');

const name: string = "EDWIN YONER";
const lastName: string = "FLORES RUPAY";

// Opción original con múltiples argumentos
console.log("Name: ", name);
console.log("LastName:", lastName);

console.log('****CONCATENACIÓN****');
// Usando el operador +
console.log(name + " " + lastName);

// Usando plantillas literales
const fullName = `Template Literals (String Interpolation) => ${name} ${lastName}`
console.log(fullName); 
 
//#endregion

//#region BOOLEAN
console.log('***********************');
console.log('********BOOLEAN*********');
console.log('***********************');

let isCompleted: boolean = false;
let hasPermission: boolean = true;

if (!isCompleted && hasPermission) {
    console.log("You can complete the task.");
} else if (isCompleted && hasPermission) {
    console.log("Task already completed.");
} else {
    console.log("You don't have permission to complete the task.");
}

let score: number = 85;
let passed: boolean = score >= 60;
console.log(`Passed: ${passed}`); // Passed: true

let input: string = "hello";
let isEmpty: boolean = input.length === 0;
console.log(`Input is empty: ${isEmpty}`); // Input is empty: false
//#endregion

//#region DATE
console.log('***********************');
console.log('********DATE*********');
console.log('***********************');

let dateNow = new Date();

console.log("La fecha actual es: ", dateNow);
console.log("La fecha actual es: ", dateNow.toISOString());
console.log("La fecha actual es: ", dateNow.toLocaleString());
console.log("La fecha actual es: ", dateNow.toLocaleDateString());
console.log("La fecha actual es: ", dateNow.toLocaleTimeString());
console.log("La fecha actual es: ", dateNow.getFullYear());
//#endregion

//#region ANY
console.log('***********************');
console.log('********ANY*********');
console.log('***********************');

function logValue(value: any): void {
    console.log(value);
}

logValue("A string");
logValue(123);
logValue({ key: "value" });
//#endregion

//#region UNKNOWN
console.log('***********************');
console.log('********UNKNOWN*********');
console.log('***********************');

let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
} else {
    console.log("Value is not a string");
}


//#endregion

export {};