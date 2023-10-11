

// const myPromise = new Promise((resolve, reject) => {
//     let num1:number = 20;
//     let num2:number = 5;
//    let sum:number = num1 + num2
//    if (sum > 20) {
//     setTimeout(() => {
//         resolve(`yesss..! The sum of ${num1} and ${num2} is greater than 20`)
//     }, 5000);
    
//    }
//     else if(sum<20 && sum > 1) {

//     resolve(`The sum of ${num1} and ${num2} is below 20! Try something other`)
    
//    }
//    else 

//     {
//     reject(`The sum of ${num1} and ${num2} is below Zero..Try to add values greater than zero.`)
//    }
   
// });


// myPromise.then((m1)=>{
// console.log(m1)})
// .catch((error)=>{
//     console.log(error);
// })

// import inquirer from "inquirer";

// const questions = ([{type:"number",name:"num1",message:"Enter First Number"},
// {type:"number",name:"num2",message:"Enter Second Number"},])

// async function calculateSum() {

//     const answers = await inquirer.prompt(questions)
//     const number1:number = answers.num1;
//     const number2:number = answers.num2;
//     const sum = number1 + number2;

//     try {
//         if(sum > 20)
//         {
//             console.log(`yesss...! The sum of ${number1} and ${number2} is greater than 20..`);
            
//         }
//         else if(sum<20 && sum>=1)
//         {
//             console.log(`The sum of ${number1} and ${number2} is between 1 and 20`);
            
//         }
//         else
//         {
//             console.log("No..! Try something different");
            
//         }
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// calculateSum()

class Person {
    name:string
    qualification:string
    university:string
    CGPA:number
    constructor(name:string,qualification:string,university:string,CGPA:number) {
        this.name = name,
        this.qualification = qualification
        this.university = university
        this.CGPA = CGPA
        
    }
    
    public set change_university(uni:string){
        console.log("Inside Setter");
        this.university = uni
        
    }

    
    public get uniName() : string {
        console.log("inside getter");
        return this.university
    }

    static testOutput(){

        console.log("Hello World")
    }
}

const person1 = new Person ('M-Bilal','BSCS','The University Of The Punjab',3.7)
const person2 = new Person ('Hamza','BSCS','The University Of The Punjab',3.4)
const person3 = new Person ('Waheed','BSCS','The University Of The Punjab',3.3)
const person4 = new Person ('Umer','BSCS','The University Of The Punjab',3.5)
person1.university = 'University of the Agriculture Faisalabad.'
console.log(person1.uniName)
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
Person.testOutput()
