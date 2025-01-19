// Find sum all natural numbers from 1 to n


function natural_sum(a){
    let sum =0
    
    for(let n =1;n<=a;n++){  
        sum += n
    }
    return(sum)
}

let result=natural_sum(8);
console.log(result)