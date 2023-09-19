// Assignment for the week is to develop CALCULTOR application which takes input from user via inquirer and perform 
//  - Addition
//  - Subtraction
//  - Multiplication
//  - Modulus
//  - Division
//  - Exponent
import inquirer from "inquirer";
function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function modulus(num1, num2) {
    return num1 % num2;
}
function exponent(num1, num2) {
    return Math.pow(num1, num2);
}
const questions = ([
    { type: "input", name: "number1", message: "Enter your first number =" },
    { type: "input", name: "number2", message: "Enter your second number =" },
    { type: "list", name: "operation", message: "select operator which you want to perform calculation", choices: ["+", "*", "/", "-", "%", "^"] },
]);
async function performingCalculations() {
    const answers = await inquirer.prompt(questions);
    const Num1 = parseInt(answers.number1);
    const Num2 = parseInt(answers.number2);
    {
        try {
            if (!isNaN(Num1) || !isNaN(Num2))
                switch (answers.operation) {
                    case "+":
                        console.log(`${answers.number1} + ${answers.number2} = ${addition(Num1, Num2)}`);
                        break;
                    case "-":
                        console.log(`${answers.number1} - ${answers.number2} = ${subtraction(Num1, Num2)}`);
                        break;
                    case "*":
                        console.log(`${answers.number1} * ${answers.number2} = ${multiplication(Num1, Num2)}`);
                        break;
                    case "%":
                        console.log(`${answers.number1} % ${answers.number2} = ${modulus(Num1, Num2)}`);
                        break;
                    case "/":
                        console.log(`${answers.number1} / ${answers.number2} = ${division(Num1, Num2)}`);
                        break;
                    case "^":
                        console.log(`${answers.number1} at the power of  ${answers.number2} = ${exponent(Num1, Num2)}`);
                        break;
                }
            else {
                console.log("Enter Valid Number");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
performingCalculations();
