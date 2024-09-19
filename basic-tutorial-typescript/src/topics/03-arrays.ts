const element = [2, "Hola", {name: "edwin"}];
console.log(element);

interface IPerson {
    name: string;
    age: number;
    job: string[];
}

const person: IPerson = {
    name: "edwin",
    age: 25,
    job: ["dev", "teacher"]
}
const person2: IPerson = {
    name: "yoner",
    age: 25,
    job: ["engineer", "writer"]
}

console.log("*******ARRAY1********");
let arrayPerson: IPerson[];
arrayPerson = [person];
console.log(arrayPerson);

console.log("*******ARRAY2********");
arrayPerson.push(person2);
console.log(arrayPerson);

const array: number[] = [1, 2, 3, 4, 5];
console.log(array);


export {}