function fibo(n){
    if(n<2){
        return n
    }
let curr=1
let next=0
let prev=0
for(let a=0 ;a<n;a++){
    next = prev+curr
    prev=curr
    curr=next
    console.log(next)
}

}

let result=fibo(5)
console.log(result)

