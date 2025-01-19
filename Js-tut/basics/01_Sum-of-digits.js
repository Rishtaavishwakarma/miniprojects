// Sum of digits of numbers
function sumOfDigit(n){
let a = n;
let sum=0 ;
while(a >= 1){
    let lastNum= a%10;
    sum += lastNum;
    a=Math.floor(a/10)
}
return sum ;
}

let result= sumOfDigit(23435325)
console.log(result)