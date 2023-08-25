"use strict";
// 1-Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfFirstNEvenNumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum = sum + i;
    }
    return sum;
}
const n = 10;
const addition = sumOfFirstNEvenNumbers(n);
console.log(`The sum of the first ${n} even numbers is ${addition}`);
// 2-Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
const arr2 = [10, 20, 33, 16, 18, 55, 21, 31, 65];
console.log("Even Numbers");
function printEvenNumbers(array) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 == 0) {
            console.log(arr2[i]);
        }
    }
}
printEvenNumbers(arr2);
// 3-Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
const arr3 = [10, 20, 33, 16, 18, 55, 21, 31, 65, 67, 77];
console.log("Odd Numbers");
function printOddNumbers(array) {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 != 0) {
            console.log(arr3[i]);
        }
    }
}
printOddNumbers(arr3);
// 4- - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
const radius = 7;
console.log("Area of the Circle");
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
const area = areaOfCircle(radius);
console.log(area);
//   5-Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
const grades = [90, 80, 70, 60, 50, 40, 30, 20, 10];
console.log("Grades without failing");
function removeFailingGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i++;
        }
    }
    return grades;
}
const final_grades = removeFailingGrades(grades);
console.log(final_grades);
//   6-Write a program that uses a function to find the largest element in an array of numbers.
const arr4 = [10, 20, 33, 16, 18, 55, 21, 313, 65, 67, 77, 78, 44];
console.log("Largest Number");
function largestNumber(array) {
    let max = array[0];
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] > max) {
            max = arr4[i];
        }
    }
    return max;
}
let lg = largestNumber(arr4);
console.log(lg);
