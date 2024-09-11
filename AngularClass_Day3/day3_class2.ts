let num: number = 42;
let str: string = "Hello world!";
let bool: boolean = true;
let arr: number[] = [1, 2, 3, 4, 5];
let tup: [string, number] = ["Age", 41];

function displayVariables(): void {
    console.log(`Value: ${num}, Type: ${typeof num}`);
    console.log(`Value: ${str}, Type: ${typeof str}`);
    console.log(`Value: ${bool}, Type: ${typeof bool}`);
    console.log(`Value: ${arr}, Type: ${typeof arr}`);
    console.log(`Value: ${tup}, Type: ${typeof tup}`);
}

displayVariables();