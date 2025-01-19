// JavaScript Program to Calculate Square Root Without Function
// function findSquareRoot(number) {
//     let guess = number;
//     const accuracy = 0.000001; // This determines the accuracy of the result
//     while ((guess - number / guess) > accuracy) {
//         guess = (guess + number / guess) / 2;
//     }
//     return guess;
// }
// // Example usage
// let number = 25;
// let squareRoot1 = findSquareRoot(number);
// console.log("The square root of " + number + " is " + squareRoot);


function squareRoot(n){
    let i =0;
    while(true){
       if(i*i == n){
        break;
       }
       else if(i*i > n){
        break;
       }
        i++
        
    }return i
}
let a= squareRoot(25);
console.log(a);
