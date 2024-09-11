const add = (a: number, b: number): number => a + b;
const sub = (a: number, b: number): number => a - b;
const multi = (a: number, b: number): number => a * b;
const div = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error('Undetermined.');
    }
    return a / b;
};

console.log('Addition: ' + add(10, 5));
console.log('Subtraction: ' + sub(10, 5));
console.log('Multiplication: ' + multi(10, 5));
console.log('Division: ' + div(10, 5));