class Calculator {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add = (): number => {
        return this.num1 + this.num2;
    }

    subtract = (): number => {
        return this.num1 - this.num2;
    }

    multiply = (): number => {
        return this.num1 * this.num2;
    }

    divide = (): number => {
        if (this.num2 === 0) {
            throw new Error("Undetermined");
        }
        return this.num1 / this.num2;
    }
}

const calculator = new Calculator(10, 5);
console.log(`Add: ${calculator.add()}`);
console.log(`Subtract: ${calculator.subtract()}`);
console.log(`Multiply: ${calculator.multiply()}`);
console.log(`Divide: ${calculator.divide()}`);