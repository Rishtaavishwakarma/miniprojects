function count_odd(a,n){
    let count =0
for(let i=a; i<=n;i++)
    if(i%2 !=0){
        count++
    }
    return count;
}
let ans=count_odd(2,10)
console.log(ans)
