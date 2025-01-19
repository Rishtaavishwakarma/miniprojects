function countTheDigits(a){
    let count =0;
    for(n=a;n>0;n=Math.floor(n/10)){
        count++
        
    }
    return count
}
let result = countTheDigits(54313)
console.log(result)