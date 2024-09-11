var num = 42;
var str = "Hello world!";
var bool = true;
var arr = [1, 2, 3, 4, 5];
var tup = ["Age", 41];
function displayVariables() {
    console.log("Value: ".concat(num, ", Type: ").concat(typeof num));
    console.log("Value: ".concat(str, ", Type: ").concat(typeof str));
    console.log("Value: ".concat(bool, ", Type: ").concat(typeof bool));
    console.log("Value: ".concat(arr, ", Type: ").concat(typeof arr));
    console.log("Value: ".concat(tup, ", Type: ").concat(typeof tup));
}
displayVariables();
