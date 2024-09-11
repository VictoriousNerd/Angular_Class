var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
var multi = function (a, b) { return a * b; };
var div = function (a, b) {
    if (b === 0) {
        throw new Error('Undetermined.');
    }
    return a / b;
};
console.log('Addition: ' + add(10, 5));
console.log('Subtraction: ' + sub(10, 5));
console.log('Multiplication: ' + multi(10, 5));
console.log('Division: ' + div(10, 5));
