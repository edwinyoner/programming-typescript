const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = ['a', 'b', 'c', 'd', 'e'];

/*
const getFirstItem = (array: any[]) => {
    return array[0];
}

const getFirstItemNumber = (array: any[]) => {
    return array[0];
}

console.log(getFirstItem(array1)); // 1
console.log(getFirstItemNumber(array2)); // 'a'
*/


// Generics
const getFirstItem = <T>(array: T[]): T => {
    return array[0];
}

function getFirstItemNumber<T>(array: T[]): T {
    return array[0];
}

console.log(getFirstItem(array1)); // 1
console.log(getFirstItem(array2)); // 'a'
console.log(getFirstItemNumber<number>(array1)); // 1
console.log(getFirstItemNumber<string>(array2)); // 'a'