interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

const person: Person = { name: "Victor", age: 41};
console.log(greet(person));