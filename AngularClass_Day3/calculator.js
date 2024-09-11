var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        var _this = this;
        this.add = function () {
            return _this.num1 + _this.num2;
        };
        this.subtract = function () {
            return _this.num1 - _this.num2;
        };
        this.multiply = function () {
            return _this.num1 * _this.num2;
        };
        this.divide = function () {
            if (_this.num2 === 0) {
                throw new Error("Undetermined");
            }
            return _this.num1 / _this.num2;
        };
        this.num1 = num1;
        this.num2 = num2;
    }
    return Calculator;
}());
var calculator = new Calculator(10, 5);
console.log("Add: ".concat(calculator.add()));
console.log("Subtract: ".concat(calculator.subtract()));
console.log("Multiply: ".concat(calculator.multiply()));
console.log("Divide: ".concat(calculator.divide()));
