// const getMax = (a, b) => Math.max(a, b);
// const add = (a,b)=>b-a
// let b =arr.reduce(getMax)
// let c =arr.reduce(add)
// console.log(b)
// console.log(c)
// arr=[1,2,3,4,5]
// let a =arr.reduce((accu,call)=> accu+call)
// console.log(a)


function missing(arr){
 let actualsum = arr.reduce((r,y) => r+y);
 let sum=0
 for(let a=1;a <= arr.length;a++){
    sum += a;
 }
 return sum-actualsum
}

let v = missing([0,1,2,3,5,6,7])
console.log(v)