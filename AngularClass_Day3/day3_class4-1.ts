function getArray<T>(items: T[]): T[] {
    return items;
  }
  
  const numberArray = getArray([1, 2, 3, 4]);
  const stringArray = getArray(["apple", "banana", "cherry"]);
  
  console.log(numberArray);
  console.log(stringArray);