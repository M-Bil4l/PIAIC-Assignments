// 1. Program to convert the temperature from Celsius to Fahrenheit and vice verse.
// Temperature conversion in Celcius to Fahrenheit
var tempInCelcius = 37;
var conversionInFahrenheit = (tempInCelcius * 9 / 5) + 32;
console.log(`${tempInCelcius} celcius is equal to ${conversionInFahrenheit} fahrenheit.`);
// Temperature conversion in Fahrenheit to Celcius
var tempInFahrenheit = 99;
var conversionInCelcius = (tempInFahrenheit - 32) * 5 / 9;
console.log(`${tempInFahrenheit} fahrenheit is equal to ${conversionInCelcius} celcius.`);
//  2.Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up
//  to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
var unitConsumed = 110;
var perUnitPrice = 25;
var electricityBill = unitConsumed * perUnitPrice;
if (unitConsumed > 100) {
    let billAfterTax = electricityBill * 10 / 100;
    electricityBill = electricityBill + billAfterTax;
    console.log(electricityBill);
}
else if (unitConsumed > 200) {
    let billAfterTax = electricityBill * 15 / 100;
    electricityBill = electricityBill + billAfterTax;
    console.log(electricityBill);
}
else if (unitConsumed > 300) {
    let billAfterTax = electricityBill * 20 / 100;
    electricityBill = electricityBill + billAfterTax;
    console.log(electricityBill);
}
else if (unitConsumed > 400) {
    let billAfterTax = electricityBill * 25 / 100;
    electricityBill = electricityBill + billAfterTax;
    console.log(electricityBill);
}
else if (unitConsumed > 500) {
    let billAfterTax = electricityBill * 30 / 100;
    electricityBill = electricityBill + billAfterTax;
    console.log(electricityBill);
}
else
    console.log(electricityBill);
// 3. Write a program that calculates the percentage.
var amountToCalculate = 20000;
var percentagevalue = 10000;
var resultOfPercentage = percentagevalue / amountToCalculate * 100;
console.log(resultOfPercentage);
// 4.Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var productPrice = 150;
if (productPrice > 100) {
    var discountedPrice10 = productPrice / 100 * 10;
    var finalPrice = productPrice - discountedPrice10;
    console.log(finalPrice);
}
else {
    var discountedPrice10 = productPrice / 100 * 5;
    var finalPrice = productPrice - discountedPrice10;
    console.log(finalPrice);
}
// 5. Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var _age = 5;
if (_age > 0 && _age < 12) {
    console.log("You are a Child.");
}
else if (_age > 13 && _age < 19) {
    console.log("You are Teenager.");
}
else {
    console.log("You are Adult.");
}
// 6.Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 3;
if (temperature >= 0 && temperature <= 10) {
    console.log("It's too Cold outside Please wear warm clothes");
}
else if (temperature > 10 && temperature <= 20) {
    console.log("It is cold outside you should wear warm clothes");
}
else {
    console.log("It's normal Temperature");
}
// 7. Write a program that checks if the given year is leap year or not.
var year = 2021;
if (year % 4 == 0) {
    console.log(`${year} is the leap year.`);
}
else {
    console.log(`${year} is not the leap year.`);
}
// 8. Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var num1 = 30;
if (num1 % 3 == 0 && num1 % 5 == 0) {
    console.log(`${num1} is divisible by both 3 and 5.`);
}
else if (num1 % 3 == 0) {
    console.log(`${num1} is divisible by 3`);
}
else if (num1 % 5 == 0) {
    console.log(`${num1} is divisible by 5`);
}
else {
    console.log(`${num1} is not divisible by both 3 and 5`);
}
// 9. Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var numberOfDays = 15;
var numberOfWeeks = Math.floor(numberOfDays / 7);
var remainingDays = numberOfDays % 7;
console.log(`${numberOfDays} has total ${numberOfWeeks} weeks and ${remainingDays} days`);
// 10. Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var dayNumber = 8;
switch (dayNumber) {
    case 1:
        console.log(`${dayNumber}th day of week is Monday`);
        break;
    case 2:
        console.log(`${dayNumber}th day of week is Tuesday`);
        break;
    case 3:
        console.log(`${dayNumber}th day of week is Wednesday`);
        break;
    case 4:
        console.log(`${dayNumber}th day of week is Thursday`);
        break;
    case 5:
        console.log(`${dayNumber}th day of week is Friday`);
        break;
    case 6:
        console.log(`${dayNumber}th day of week is Saturday`);
        break;
    case 7:
        console.log(`${dayNumber}th day of week is Sunday`);
        break;
    default:
        console.log("Enter number of day from 1 to 7");
}
export {};
// Write a fucntion that calculates the average of marks
