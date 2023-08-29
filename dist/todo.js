"use strict";
// var  toDo:string[] = ["Learn Array","Learn Array Method"]
// let updateToDo = toDo.splice(1,0,'Practice Array')
// console.log(toDo);
// toDo.splice(1,1,'Learn Array Method')
// console.log(toDo);
const todosArray = ["hamza", "bilal", "anas", "noman", "Faizan", "Usman"];
const removeElements = () => {
    if (todosArray.length % 2 != 0) {
        todosArray.splice((todosArray.length / 2), 1);
    }
    else {
        todosArray.splice((todosArray.length / 2) - 1, 2);
    }
};
// console.log("Before Deletion",todosArray)
// removeElements()
// console.log("After Deletion",todosArray)
let number = 1;
while (number <= 10) {
    console.log(`2 x ${number} = ${2 * number}`);
    number++;
}
