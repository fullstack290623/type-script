const message: string = "Hello, TypeScript!";
const count: number = 5;

function greet(name: string): string {
    return `Hello, ${name}!`;
}

//console.log(greet(1));  //Error
//const result: number = greet('danny') // Error
const result: string = greet('danny')

interface Person {
    firstName: string;
    lastName: string;
    greet(): string,
}

function fullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

console.log(fullName({ firstName: 'danny', lastName: 'shovevany', greet: () => "hi" }));

// Example object implementing the Person interface
const person: Person = {
    firstName: "Jon",
    lastName: "Snow",
    greet() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    }
};

interface ContactDetails {
    email: string;
    phoneNumber: string;
}

const contact: Person & ContactDetails = {
    firstName: "Daenerys",
    lastName: "Targaryen",
    email: "daenerys@example.com",
    phoneNumber: "123-456-7890",
    greet() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    }    
};

interface Flex_person {
    firstName: string;
    lastName: string;
    [key: string]: any; // Allows any number of additional properties with any type
}

const person2: Flex_person = {
    firstName: "Daenerys",
    lastName: "Targaryen",
    field1: 1
}

class P1 implements Person {
    firstName = "Jon";
    lastName = "Snow";
    x = 1; // class can have more fields than the interface
    greet() {
        return `Hello, I am ${this.firstName} ${this.lastName}`;
    } 
}