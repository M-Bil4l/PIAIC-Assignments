//  Write a program that print all the car company and year number from the FileList,make sure car is an object
let car1 = {
    company: "Honda",
    model: 2023,
    color: "White",
    price: 4500000,
    isUsedCar: false
};
let car2 = {
    company: "Audi GT Etron",
    model: 2023,
    color: "Black",
    price: 85000000,
    isUsedCar: false
};
let car3 = {
    company: "Audi GT Etron",
    model: 2023,
    color: "Black",
    price: 85000000,
    isUsedCar: false
};
let car4 = {
    company: "Corolla",
    model: 2023,
    color: "Black",
    price: 3500000,
    isUsedCar: true
};
const carList = [car1, car2, car3, car4];
for (let i = 0; i < carList.length; i++) {
    console.log(carList[i].company, carList[i].model);
}
export {};
// console.log(carList[0].company,carList[0].model);
// console.log(carList[1].company,carList[1].model);
// console.log(carList[2].company,carList[2].model);
// console.log(carList[3].company,carList[3].model);
