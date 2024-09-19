import { IAction } from "./utils/actions-interfaces";

class Person{
    public name: string;
    public lastName: string;
    private age: number;
    protected fullName: string;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.fullName = `${this.name} ${this.lastName}`;
    }

    walk(): void {
        console.log(`${this.name} está caminando`)
    }

    talk(): void {
        console.log(`${this.fullName} está hablando: "Nací el año ${this.yearBirth()}"`);
    }

    private yearBirth(): Number {
        const  currentDate = new Date();
        const birthYear = currentDate.getFullYear() - this.age;
        return birthYear;
    }
}

const person = new Person('Juan', 'Pérez', 15);
console.log(person); // Juan
person.walk(); // Juan está caminando
person.talk(); // Juan Pérez está hablando: "Nací el año 2009"

class Astronauta extends Person implements IAction{
    public numberMasterDegrees: number = 0;

    constructor(name: string, lastName: string, age: number, numberMasterDegrees: number) {
        super(name, lastName, age);
        this.numberMasterDegrees = numberMasterDegrees;
    }
    pilotShip(): void {
        //throw new Error("Method not implemented.");
        console.log(`${this.name} tiene permiso para pilotear la nave espacial`);
    }

    getFullName(): string {
        return this.fullName;
    }
}

console.log("*******************************************");
console.log("*****DATOS DEL POSTULANTE A ASTRONAUTA*****");
console.log("*******************************************");

const astronauta = new Astronauta('Jhon', 'Conor', 45, 5);
console.log("Datos del astronauta:", astronauta); // Jhon Conor
console.log("Nombre completo del astronauta:", astronauta.getFullName()); // Jhon Conor
astronauta.pilotShip(); // Jhon Conor tiene permiso para pilotear la nave espacial
