function getArrayLength<T>(array: T[]): number {
    return array.length;
}

const numberArray: number[] = [1, 2, 3, 4, 5];
console.log(getArrayLength(numberArray));