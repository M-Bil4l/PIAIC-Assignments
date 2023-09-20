
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified
// index in the array. Return the modified array.

const array:string[] = ['Bilal','Usman','Ali','Asad']
const index:number = 1;
const insertedValue:string = 'Asad';
console.log("Array before Splice Method:")
console.log(array);


function insertValue(array:string[],index:number,value:string):string[] {
    array.splice(index,0,value)
    return array
}

const modifiedArray:string[] = insertValue(array,index,insertedValue)

console.log("Array After Splice Method:");
console.log(modifiedArray);
console.log(`Value is inserted at index ${index}`);

// 2-Write a program that uses a while loop to print the first 25 integers.

let i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}

// 3-Write a program that uses a while loop to print the first 10 even numbers.

let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

// 4-Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
let num2:number = 5;
function factorial(num:number):number {
    let factorial:number = 1;
    let i:number = 1;
    while (i<=num) {
        factorial *= i;
        i++;
    }
    return factorial;
}

console.log(factorial(num2));


// 5-Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

const array2:number[] = [-33,44,-66,32,34,5,2];

function removeNegativeNumber(array:number[]):number[] {
        for( let i=0;i<=7;i++)
        {
            if(array[i]<0)
            {
                array.splice(i,1);
            }
        }
        return array
}

console.log(removeNegativeNumber(array2));

// 6-Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

const array3:number[] = [44,55,65,789,23,22,45]

function sumArray(array:number[]):number {
    let sum:number = 0;
    let i:number = 0
    // for(let i=0;i<array.length;i++)
    while(i<array.length)
    {
        sum += array[i];
        i++;
    }
    return sum;
}

console.log(sumArray(array3));

// 7- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

const array4:number[] = [35,37,40,44,48,62,80,90,100];

console.log('Array of Celcius Temperature');

function displayArrayElements(array: number[]) {

    let displayArray:number[] = [] 
    for (let i = 0; i < array4.length; i++) {
      displayArray.push(array4[i]);
    }

    return displayArray;
  }
  console.log(displayArrayElements(array4));


function convertCelciusToFahrenheit(array:number[]):number[] {
    let i:number = 0

    while(i<array.length)
    {
        array[i] = (array[i] * 9/5) + 32;
        i++;
    }
    return array;
}

console.log(convertCelciusToFahrenheit(array4));

// 8-Implement a simple shopping cart program using an array Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

function addItem(cart: Array<string>, itemName: string) {
    cart.push(itemName);
  }

  
  function removeItem(cart: Array<string>, itemName: string) {
    const index = cart.indexOf(itemName);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }

  
  function updateQuantity(cart:string[], itemName: string, quantity: any) {
    let index:number = cart.indexOf(itemName);
    if (index !== -1) {
      cart[index] = quantity;
    }
  }


  
  const cart:string[] = [];
  
  addItem(cart, "Apple");
  addItem(cart, "Banana");
  addItem(cart, "Orange");
  
  console.log("Cart contents:");
  console.log(cart);
  
  removeItem(cart, "Banana");
  
  console.log("After removing Banana:");
  console.log(cart);
  
  updateQuantity(cart, "Apple", 2);
  
  console.log("After updating the quantity of Apple to 2:");
  console.log(cart);
  