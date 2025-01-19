function Palindrome(a){
    let copy = a
    let lastnum=0;
    let reverse_num=0;
    while(copy>=1){
    lastnum=Math.floor(copy%10)
    reverse_num=reverse_num*10+lastnum;
    copy= Math.floor(copy/10)
    }
    
     if (a == reverse_num){
    console.log("it's palindrome yaar")
    }else{
    console.log("it's not yaar")
    }   
}

let result = Palindrome(1001)
console.log(result)