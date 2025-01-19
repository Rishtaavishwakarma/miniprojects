function power(n){
    if (n<=0){
        return false;
    }
    while(n%2 === 0){
        n /= 2
    }
    return n === 1;
}
let ans=power(16)
console.log(ans)