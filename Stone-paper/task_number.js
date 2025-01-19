function lonumber(number){   
    let count=0;
     for(let a= number;a > 0; a=Math.floor(a/10)){
        count++;
     }
    return count;

}

let result = lonumber(234545);
console.log(result)


function SumofInteger(number){
    
}