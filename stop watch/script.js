let milli=0
let  hr=0
let sec=0
let min=0
let chaluHai= false

function start(){
    chaluHai=true
    myfun()
}
function stop(){
    chaluHai=false
    myfun()
}
function restart(){
    location.reload()
}

function myfun(){
    if (chaluHai==true){
        milli = milli + 1
        if(milli == 100){
            sec = sec+1
            milli = 0
        }
        if(sec== 60){
            min = min+1
            sec =0
        }
        if(min == 60){
            hr= hr+1
            min = 0
        }
        setTimeout("myfun()",10)  
    }
let getmin=min
let getsec=sec
let gethr=hr
let getmilli=milli
if(milli<10){
    getmilli="0"+milli
}
    if(sec<10){
        getsec= "0"+sec;
    }
    if(min<10){
        getmin= "0"+min;
    }
    if(hr<10){
        gethr= "0"+hr;
    }
    
    document.getElementById("hr").innerText=gethr
    document.getElementById("min").innerText=getmin
    document.getElementById("sec").innerText=getsec
    document.getElementById("milli").innerText=getmilli

}
