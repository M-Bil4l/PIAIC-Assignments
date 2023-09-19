// *1* Write a program that uses filter to remove all negative numbers from an array of numbers
const arrayNumber = [33, -44, -56, -66, 32, 99];
let positiveArray = arrayNumber.filter((num) => {
    if (num >= 0)
        console.log(num);
});
// *2* Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const array5 = [1, 2, 3, 4, 5];
console.log("Array Before Map");
console.log(array5);
console.log("Array After Map");
const doubleNumber = array5.map((num) => num * 2);
console.log(doubleNumber);
// *3* Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
console.log("Array Before Filter");
console.log(fruitsArray);
console.log("Array After Filter");
const arrayAfterFilter = fruitsArray.filter((fruit) => {
    if (fruit.length > 5)
        return fruit;
});
console.log(arrayAfterFilter);
// *4* Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array before Methods(Map and Filter)");
console.log(arrayOfNumbers);
console.log("Array After Methods (Map and Filter)");
const arrayAfterMethods = arrayOfNumbers.filter(num => num % 2 === 0).map(evenNumber => evenNumber ** 2);
console.log(arrayAfterMethods);
// *5* Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const celciusArray = [0, 10, 20, 30, 40];
const farArray = celciusArray.map((celcius) => (celcius * 9 / 5) + 32);
console.log(farArray);
// *6* Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
const numbersArray = [3, 6, 9, 12, 15, 18];
console.log("Array before Methods(Map and Filter)");
console.log(numbersArray);
console.log("Array After Methods (Map and Filter)");
const doubleOddNumber = numbersArray.filter(num => num % 2 != 0).map(oddNumber => oddNumber * 2);
console.log(doubleOddNumber);
// *7* Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"
const nameArray = ["Alice", "Bob", "Charlie", "David", "Emily"];
// const updatedArray = nameArray.forEach(name => console.log(`${name}!`))
const nameWithExclamation = [];
const updatedArray = nameArray.forEach(name => { nameWithExclamation.push(`${name}!`); });
console.log(nameWithExclamation);
export {};
