const outPut=document.querySelector(".outPut");
const timeTest=()=>{
    setTimeout(function(){
         console.log("DU hast 3 Sekunden aus deinem Leben um sonst verschwunden");}, 3000);
        
}
timeTest()


const setIntervalTest =()=>{
const date1=new Date();
let hour =date1.getHours();
let min=date1.getMinutes();
let sec=date1.getSeconds();
const currentTime=hour+":"+min+":"+sec;
outPut.textContent=currentTime;
setInterval(setIntervalTest,1000);
}
setIntervalTest()

const outPut2=document.getElementById("countdown");
var seconds = 10;
var countdown = setInterval(function() {
    seconds--;
    outPut2.textContent = `Timer: ${seconds}`;
    if (seconds <= 0){
    clearInterval(countdown)
    let body=document.body;
    body.style.background="green";
    outPut2.style.color="white";
    outPut.style.color="white";
    outPut2.textContent = "Feierabend Time :) ";
    } 
    ;
}, 1000);
