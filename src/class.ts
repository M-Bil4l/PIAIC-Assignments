let sum:number = 0;
let numberArray:number[] = []
for(let i:number = 0;i <= 100; i++){
    if(i%2 == 0){
        numberArray.push(i)
        sum = sum + i
    }
}

console.log(numberArray)
console.log(sum)