function fizzbuzz(n){
    if(n%5 ===0 && n%3===0){
        console.log("fizzbuzz")
    }
    else if(n%5 ===0 ){
        console.log("fizz")
    }
    else{
        console.log("buzz")
    }
    
}
let ans=fizzbuzz(15)
console.log(ans)
