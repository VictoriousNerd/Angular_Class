function greet(person) {
    return "Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old.");
}
var person = { name: "Victor", age: 41 };
console.log(greet(person));
