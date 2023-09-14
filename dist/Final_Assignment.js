"use strict";
// 1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "Mr-Shah";
console.log(`"Hello ${personName}, would you like to learn some Python today?"`);
// 2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// NAme in UpperCase
let personName1 = "Muhammad Bilal";
function upperName(name) {
    var upperName = name.toUpperCase();
    return upperName;
}
console.log(upperName(personName1));
// NAme in LowerCase
let personName2 = "Muhammad Bilal";
function lowerName(name) {
    var lowerName = name.toLowerCase();
    return lowerName;
}
console.log(lowerName(personName2));
// NAme in TitleCase
let personName3 = "Muhammad Bilal";
function titleName(name) {
    return name
        .split(' ')
        .map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
        .join(' ');
}
console.log(titleName(personName3));
// 3. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: 
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
const authorName = "Alert Einstein";
const quote = "A person who never made a mistake never tried anything new";
function displayQuote(name, sentence) {
    const result = `${name} once said,"A person who never made a mistake never tried anything new"`;
    return result;
}
console.log(displayQuote(authorName, quote));
// 4. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_person = "William Faulkner";
const message = "It may be bad, but it's the only way you can do anything really good.";
function displayMessage(name, sentence) {
    const result = `${name} once said,"A person who never made a mistake never tried anything new"`;
    return result;
}
console.log(displayQuote(famous_person, message));
// 5. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
const personName4 = "\t Muhammad Bilal\t";
console.log("Name before removing white spaces");
console.log(personName4);
console.log("Name after removing white spaces");
function removeWhiteSpaces(name) {
    const nameAfterWhiteSpaces = name.trim();
    return nameAfterWhiteSpaces;
}
console.log(removeWhiteSpaces(personName4));
// 6. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
let numb1 = 20;
let numb2 = 31;
let numb3 = 44;
let additionResult = (n1, n2, n3) => {
    let sum = n1 + n2 + n3;
    return sum;
};
console.log(`sum of given numbers is = ${additionResult(numb1, numb2, numb3)}`);
let numb4 = 20;
let numb5 = 31;
let numb6 = 44;
let subtractionResult = (n1, n2, n3) => {
    let subtraction = n1 - n2 - n3;
    return subtraction;
};
console.log(`subtraction result of given numbers is = ${subtractionResult(numb4, numb5, numb6)}`);
let numb7 = 20;
let numb8 = 31;
let numb9 = 44;
let divisionResult = (n1, n2, n3) => {
    let division = n1 / n2 / n3;
    return division;
};
console.log(`division result of given numbers is = ${divisionResult(numb7, numb8, numb9)}`);
let numb10 = 20;
let numb11 = 31;
let numb12 = 44;
let multiplicationResult = (n1, n2, n3) => {
    let multiplication = n1 * n2 * n3;
    return multiplication;
};
console.log(`multiplication result of given numbers is = ${multiplicationResult(numb10, numb11, numb12)}`);
// 7. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
console.log("-------------------------------------------------------------");
console.log(`console.log(5 + 3)`);
console.log("-------------------------------------------------------------");
// 8. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 22;
const msg = `My favorite number is ${favoriteNumber}`;
console.log(msg);
// 9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// Comments for this Addition program: This Program is doing the sum of two given numbers and display.
let n1 = 33; //This line initializes a variable name n1.
let n2 = 22; // This line initializaes a variable name n2
let res = n1 + n2; //This line add both of the variables and store their sum result in 'res' variable. 
console.log(`The sum of the two given numbers is ${res}`); //This line shows the final result after addition of two given value using template literals.
console.log("---------------------------------------------------------------------------------------------------------");
// 10 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const names = ["Ali", "Usman", "Asad", "Umer"];
for (const name of names) {
    console.log(name);
}
console.log("---------------------------------------------------------------------------------------------------------");
// 11.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const namesArray = ["Ali", "Ahmed", "Usman", "Noman"];
for (const name of namesArray) {
    let greeting = `Hello Mr-${name}, Hope you are doing well today.`;
    console.log(greeting);
}
console.log("---------------------------------------------------------------------------------------------------------");
// 12.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
const favoriteBikes = ["CD-70", "Honda CG 125", "Kawasaki Ninja H2R", "Yamaha YZF-R1"];
// favoriteBikes.forEach((motorcycle) => {
//     console.log(`I would like to own a ${motorcycle} motorcycle.`);
//   });
for (const bike of favoriteBikes) {
    console.log(`I would like to own a ${bike} motorcycle.`);
}
console.log("---------------------------------------------------------------------------------------------------------");
// 13. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guest = ["Usman", "Ali", "Asad", "Hamza"];
// guest.forEach((person)=>{
//     console.log(`I would like to invite you on dinner Mr-${person}`);
// })
function sendDinnerInvitation(person) {
    console.log(`Dear ${person},\nYou are cordially invited to a special dinner gathering. Please join us for an evening of great conversation and delicious food.\n\nSincerely,\nMr-Bilal`);
}
// Iterate through the guest list and send invitations
guest.forEach((guest) => {
    sendDinnerInvitation(guest);
});
console.log("-------------------------------------------------------------------------------------------------------");
// 14.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
const guestList = ["Usman", "Ali", "Asad", "Hamza"];
const guestWhoCantMAkeIt = "Asad";
const newGuest3 = "Noman";
const indexOfGuestCantMAkeIt = guestList.indexOf(guestWhoCantMAkeIt);
if (indexOfGuestCantMAkeIt !== -1) {
    guestList[indexOfGuestCantMAkeIt] = newGuest3;
}
else {
    console.log(`index of ${indexOfGuestCantMAkeIt} does not found`);
}
function inviteForDinner(guest) {
    console.log(`Hello Mr-${guest} I am inviting you for very delicious and  tasty dinner.`);
}
for (const guest of guestList) {
    inviteForDinner(guest);
}
console.log(`But unfortunaltely Mr-${guestWhoCantMAkeIt} is not available to join us.`);
console.log("---------------------------------------------------------------------------------------------------------");
// 15. You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
const invitedGuest = ["Usman", "Ali", "Noman", "Umer"];
invitedGuest.unshift("Bilal");
const newGuest = ["Faizan", "Hafiz", "Hamza"];
function invitationForDinner(person) {
    console.log(`As some New Frnds are also be added in my invite list so Mr-${person} i am again send you invitation for dinner`);
}
invitedGuest.push(...newGuest);
console.log(invitedGuest);
for (const guest of invitedGuest) {
    invitationForDinner(guest);
}
console.log(`As i found the bigger dinner table and some space is also available that's why i decided to invite more peoples.`);
// Add one new guest to the middle of your array.
console.log("Array before insert value in it");
console.log(invitedGuest);
invitedGuest.splice(2, 0, "Momin", "Huzaifa");
console.log("Array after insert value at index 2,3 ");
console.log(invitedGuest);
console.log("---------------------------------------------------------------------------------------------------------");
// 16. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
const invitedGuest2 = ["Usman", "Ali", "Noman", "Umer"];
invitedGuest.unshift("Bilal");
const newGuest2 = ["Faizan", "Hafiz", "Hamza"];
function invitationForDinner2(person) {
    console.log(`As some New Frnds are also be added in my invite list so Mr-${person} i am again send you invitation for dinner`);
}
invitedGuest.push(...newGuest);
console.log(invitedGuest);
for (const guest of invitedGuest) {
    invitationForDinner(guest);
}
console.log(`As i found the bigger dinner table and some space is also available that's why i decided to invite more peoples.`);
console.log("As i mention earlier that i found big table and want to invite more peoples so i want to tell you that space at my table is only for two poeples so be on time.");
//16(part) Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
const guestList5 = ["Usman", "Ali", "Asad", "Hamza"];
if (guestList5.length === 2) {
    console.log("You can invite only two peoples");
}
else
    console.log("You can invite more than two peoples");
while (guestList5.length > 2) {
    const removedGuest = guestList5.pop();
    if (removedGuest) {
        console.log(`Sorry Mr-${removedGuest} you are not invited for dinner.`);
    }
}
console.log("Final Guest list after removing");
for (const guest of guestList5) {
    console.log(`Mr-${guest} you are still  invited for dinner.`);
}
// 16(part) Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(guestList5);
guestList5.splice(0, 2);
console.log("At the ending of this program i have an empty array. given below");
console.log(guestList5);
// 17. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
const countaries = ["Switzerland", "Australia", "Makkah", "Ireland", "United Kingdom"];
const sortedArray = countaries.slice();
const reverseArray = countaries.slice();
reverseArray.reverse();
console.log("Array in reverse order:", reverseArray);
console.log("Array order has been changed");
reverseArray.reverse();
console.log("Array is still in original order");
console.log(reverseArray);
sortedArray.sort();
console.log(("Array order has been changed:"));
console.log("Array in sorted order:", sortedArray);
console.log("But Array is still in the  original order:", countaries);
// 18. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
const dinnerGuest = ["Ali", "Zeeshan", "Ahmed", "Usman", "Suleman", "Hamza", "Noman"];
const count = countValues(dinnerGuest);
function countValues(arr) {
    return arr.length;
}
console.log(`You are inviting ${count} peoples for dinner`);
// 19. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const favoritecountries = ["Pakistan", "Australia", "United Kingdom", "China"];
console.log("List of Countries");
for (const country of favoritecountries) {
    console.log("Countries are:", country);
}
const fvrtcountries = {
    Pakistan: 'Pakistan is My Country',
    Australia: 'One of the Beautiful Country',
    UnitedKingdom: 'Most of the peoples like it very much.',
    China: 'China is the Friend of Pakistan'
};
console.log(fvrtcountries.Pakistan);
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const arr5 = ["Ali", "Ahmed", "Usman", "Bilal"];
const indexError = arr5[2];
if (indexError !== undefined) {
    console.log("This will never be solve due to Error ");
}
else {
    console.log("index error was caught and corrected");
}
const myIndex = arr5[2];
console.log("The value at this index is:", myIndex);
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'Audi Gt Etron';
console.log("Is car == 'Audi Gt Etron'? I predict true.");
console.log(car == 'Audi Gt Etron');
let car5 = 'BMW';
console.log("Is car != 'BMW'? I predict false.");
console.log(car5 != 'BMW');
let number1 = 25;
let number2 = 30;
console.log("Is number1 > number2? I predict false.");
console.log(number1 > number2);
let number3 = 56;
let number4 = 11;
console.log("Is number1 > number2? I predict true.");
console.log(number3 > number4);
let isAuto = true;
let isUsed = true;
console.log("Is it auto and used? I predict true.");
console.log(isAuto && isUsed);
let isAutoCar = true;
let isUsedCar = false;
console.log("Is it auto car and but not used car? I predict false.");
console.log(isAutoCar && isUsedCar);
let isSecondHand = true;
let isManual = false;
console.log("Is it second hand used but not a manual car? I predict true.");
console.log(isSecondHand || isManual);
let isSecondHandCar = true;
let isManualCar = true;
console.log("Is it second hand used or manual? I predict true.");
console.log(isSecondHand || isManual);
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and Inequality Tests with Strings
let fruit1 = 'Mango';
let fruit2 = 'pineapple';
// Test : String equality (False)
console.log("Is fruit1 equal to fruit2? I predict False.");
console.log(fruit1 == fruit2);
// Test: String inequality (True)
console.log("Is fruit1 not equal to fruit2? I predict True.");
console.log(fruit1 != fruit2);
// Tests Using Lowercase Function
let text = 'Hello, World!';
// Test: Check if the string is lowercase (False)
console.log("Is the text in lowercase? I predict False.");
console.log(text.toLowerCase() === text);
// Test: Check if the string is lowercase (True)
console.log("Is the text in lowercase? I predict True.");
console.log(text.toLowerCase() === text.toLowerCase());
// Numerical Tests
let number11 = 42;
let number22 = 17;
// Test : Greater than (True)
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
// Test : Less than (False)
console.log("Is number1 less than number2? I predict False.");
console.log(number1 < number2);
// Test 17: Greater than or equal to (True)
console.log("Is number1 greater than or equal to number2? I predict True.");
console.log(number1 >= number2);
// Test 18: Less than or equal to (False)
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
// Tests Using "And" and "Or" Operators
let isHot = true;
let isCold = false;
// Test 19: "And" operator (False)
console.log("Is it hot and cold at the same time? I predict False.");
console.log(isHot && isCold);
// Test 20: "Or" operator (True)
console.log("Is it either hot or cold? I predict True.");
console.log(isHot || isCold);
// Test Whether an Item is in an Array
let numbers = [1, 2, 3, 4, 5];
// Test 21: Check if 3 is in the array (True)
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));
// Test Whether an Item is Not in an Array
// Test 22: Check if 6 is not in the array (True)
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
let alien_Color1 = "green";
if (alien_Color1 === "green") {
    console.log("You just earned 5 points!");
}
let alien_Color2 = "yellow";
if (alien_Color2 === "green") {
    console.log("You just earned 5 points!");
}
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
const alienColor = 'green';
if (alienColor == 'green') {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("The player just earn 10 points");
}
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor2 = "green";
if (alienColor2 === "green") {
    console.log("player just earned 5 points!");
}
else if (alienColor2 === "yellow") {
    console.log("player just earned 10 points!");
}
else if (alienColor2 === "red") {
    console.log("player just earned 15 points!");
}
else {
    console.log("Invalid alien color!");
}
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
const personAge = 1;
if (personAge < 2) {
    console.log("Person is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("Person is a Toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("Person is a kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("Person is Teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("Person is Adult");
}
else
    console.log("Person is an ELder");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits = ["apple", "banana", "mango"];
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes("pineapple")) {
    console.log("You really like pineapple!");
}
if (favoriteFruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favoriteFruits.includes("grapes")) {
    console.log("You really like grapes!");
}
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const users = ['Admin', 'Eric', 'john', 'micheal', 'anderson'];
for (const user of users) {
    if (user === "Admin")
        console.log(`Hey ${user} would you like to see a status report`);
    else {
        console.log(`Hello ${user} thank you for logging in again`);
    }
}
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const user_name = ['Ali', 'Ahmed', 'Bilal', 'Hamza', 'Usman'];
const removeElement = user_name.splice(3, user_name.length);
if (user_name.length === 0) {
    console.log("We need to find some user");
}
else {
    console.log("There is some user exist in the list");
}
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users = ['Ali', 'Usman', 'Bilal', 'Hamza', 'Noman', 'Umer'];
const new_users = ['Qasim', 'Mohsin', 'Bilal', 'Hamza', 'Noman', 'Asif'];
for (const newUser of new_users) {
    // Check if the new username exists in current_users (case-insensitive)
    const usernameExists = current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase());
    if (usernameExists) {
        console.log(`Sorry, the username "${newUser}" is already taken.`);
    }
    else {
        console.log(`Congratulations, the username "${newUser}" is available.`);
    }
}
//   Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
const arr_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of arr_numbers) {
    let ordinal;
    if (number === 1)
        ordinal = "1st";
    else if (number === 2)
        ordinal = "2nd";
    else if (number === 3)
        ordinal = "3rd";
    else
        ordinal = number + "th";
    console.log(`The ordinal for ${number} is ${ordinal}`);
}
// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
const a_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of arr_numbers) {
    let ordinal;
    if (number === 1)
        ordinal = "1st";
    else if (number === 2)
        ordinal = "2nd";
    else if (number === 3)
        ordinal = "3rd";
    else
        ordinal = number + "th";
    console.log(`${number}  ${ordinal}`);
}
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
const arr_Pizza = ['Supreme', 'Fajita', 'Pepperoni'];
for (const pizza of arr_Pizza) {
    console.log(`I like ${pizza} pizza`);
}
console.log(`I like Pepperoni Pizza from all of these pizza.'\n'It taste is very delicious.'\n'I also like other flavours but this pepperoni flavour pizza is the one i like most among all.'\n'I really love this Pizza! `);
// Animals: Think of at least three different animals that have a common characteristic.Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
const animals = ['Dog', 'cat', 'parrot'];
for (const animal of animals) {
    console.log(`The Animal names are:${animal}`);
}
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet`);
}
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
const shirt_text = "Never Give Up";
let shirt_size = "medium";
function make_shirt(size, text) {
    console.log(`you shirt size is ${size} and text print on it is ${text}`);
}
make_shirt("medium", "Never Give Up");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
// message.
// const shirt_msg:string = "Never Give Up"
// let shirt_len1:string = "large"
// let shirt_len2:string = "Medium"
function make_shirt2(size = "large", text = "I love Typescript") {
    console.log(`your shirt size is ${size} and text print on it is ${text}`);
}
make_shirt2();
make_shirt2("Medium");
make_shirt2("Small", "I love Javascript");
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
const city = "Faisalabad";
function describe_city(city, country = "Default country") {
    console.log(`${city} is in ${country}`);
}
describe_city("Faisalabad", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("Paris", "France");
describe_city("Karachi");
// City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
const city1 = "Faisalabad";
const country1 = "Pakistan";
function city_country(city, country) {
    return `${city} , ${country}`;
}
let result1 = city_country("Faisalabad", "Pakistan");
let result2 = city_country("Lahore", "Pakistan");
let result3 = city_country("Karachi", "Pakistan");
console.log(result1);
console.log(result2);
console.log(result3);
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    "Making disctionary";
    let album = { 'artist_name': artist_name, 'album_title': album_title, 'tracks': tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album_1 = make_album("Album1", "First Album");
const album_2 = make_album("Album2", "First Album");
const album_3 = make_album("Album3", "First Album", 10);
console.log(album_1);
console.log(album_2);
console.log(album_3);
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magician = ['John', 'Micheal', 'Jimmy', 'Professor'];
function show_magicians(magicians) {
    console.log("Magicians are");
    for (const magician of magicians)
        console.log(`${magician}`);
}
show_magicians(magician);
// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagicianName = `${magician} the Great`;
        greatMagicians.push(greatMagicianName);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["David", "Henry", "Johnes", "Professor"];
const greatMagicianNames = makeGreat(magicianNames);
showMagicians(greatMagicianNames);
console.log("------------------------------------------------------------------------------------------------------");
//   Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreat2(names) {
    const greatMagicians = [...names];
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the Great';
    }
    return greatMagicians;
}
function showMagicians2(names) {
    for (const name of names) {
        console.log(name);
    }
}
const magicianNames2 = ['Professor', 'Tokyo', 'Berlin'];
const greatMagicianNames2 = makeGreat2(magicianNames2);
console.log('Original Magician Names:');
showMagicians2(magicianNames2);
console.log('Magician Names with "the Great":');
showMagicians2(greatMagicianNames);
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have  //one parameter that collects as many items as the function call provides, and it should print a summary of the 
//sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const sandwich1 = ['Mayonnaise', 'Bread', 'Chicken'];
const sandwich2 = ['Mayonnaise', 'Bread', 'lettuce', 'vegetable'];
const sandwich3 = ['Mayonnaise', 'Bread', 'Chicken', 'Egg', 'Tomato Ketchup'];
function makeSandwich(sandwichItems) {
    console.log("Make Sandwich with these items");
    console.log(`items are:`);
    for (const item of sandwichItems) {
        console.log(`${item}`);
    }
    console.log("Enjoy Your Sandwich");
    console.log("----------------------------------------------------------------------------------------------------");
}
makeSandwich(sandwich1);
makeSandwich(sandwich2);
makeSandwich(sandwich3);
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer,
        modelName,
    };
    // Process optional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required and optional information
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", 2023);
console.log(myCar);
