//strings operations basic methods
const str1="helloworld"
const str2='hyeuusko'
const str3=`rishta`
const str4=new String("hello")
//accessing character
str1.charAt(2)
str1[2]
//comparing strings
const a="yhuj"
const b="yhuji"
// if(a<b){console.log("a is smaller");
// }
// else if(a>b){
//     console.log("a is greater");
    
// }
// else{ console.log(`${a}`);
// }


const areEqual = (str1, str2, locale = "en-US") =>
    str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;
  
  areEqual("ß", "ss", "de"); // false
  areEqual("ı", "I", "tr"); // true

//Q-1:make the function which gives the amount of count the character appear in the string
function countCharacter(str,ltr){
    let count=0
    let ind=0
    for(let a =1;a<=str.length;a++){
        ind++
if(str[ind]===ltr){
    count++
}
    }
    return count;
}
// let's check
// let a = countCharacter("Hello heojwnrhgerhfdhritehbds","e");
// console.log(a)


function countChar(str,char){
    let count=0;
    let index = str.indexOf(char)
    while(index != -1){
        ++count;
        index = str.indexOf(char,index+1)
      
    }
    return count;
}
// let a = countChar("Hello heojwnrhgerhfdhritehbds","e");
// console.log(a)




//Q-2: Create function t0 check palindrome
function CheckPalindrome(str){
    let reverse="";
    let char;
for(let i= str.length-1; i >=0 ; i--){
char = str[i]
reverse+=char
}
console.log(reverse);

if(reverse==str){
    console.log("it's is palindrome");
    
}
else{
    console.log("its is not palindorme");
    
}
}
// let's check
// let a = CheckPalindrome("helleh")
// console.log(a);



//Q-3: Reverse the string
// function reverseString(str){
//     let reverse="";
//     let char;
// for(let i= str.length-1; i >=0 ; i--){
// char = str[i]
// reverse+=char
// }
// console.log(reverse);
// }



function reverseString(str){
    let reverse="";
for(let i=0 ; i < str.length ; i++){
reverse = str[i]+ reverse
}
console.log(reverse);
}
// reverseString("Rishta")


//Q-4: check character at given index lowercase or not
function checkString(str,ind){
    if (str[ind].toLowerCase() === str[ind]){
        return true;
    }
    else{
        return false;
    }
}

// check output
// let a = checkString("helLo",3)
// console.log(a)



//Q-5: write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf
function uniqueChar(str){ ///using set

let unique=[...new Set(str)];
console.log(unique)
}
// let a = uniqueChar("hello")
// console.log(a)


//Q-6: Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
function step(n){
let a ="# "

for(let i = 1; i <= n;i++){

    console.log(a.repeat(i))
}
}

// let steps= step(4)
// console.log(steps);


//Q-7: Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(rows){
    
    for(let i = 1; i<=rows;i++){
        let space=" ".repeat(rows-i)
        let hash="#".repeat(2*i - 1)
  console.log(space+hash+space)

    }
}
// pyramid(4)


// question:- Make range function which takes start , stop, step and return array from it where at start of array number is start and at end of array number is stop but there is interval in those series of number which is defined by step

function range(start,stop,step){
    let i = start
    let arr=[i]
    for(i= start+1;i< stop;i++){
        i= i+ step
    arr.push(i)
    }
    console.log(arr)
}
range(1,10,1)