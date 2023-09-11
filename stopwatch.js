let seconds=00;
let tens= 00;
let getseconds = document.querySelector('.seconds');
let gettens = document.querySelector('.tens');
let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');
let interval;

btnstart.addEventListener('click',()=>{
     interval = setInterval(startTimer, 10)
})
btnstop.addEventListener('click',()=>{
    clearInterval(interval);
})
btnreset.addEventListener('click',()=>{
    clearInterval(interval);
    tens='00';
    seconds='00';
    getseconds.innerHTML=seconds;
    gettens.innerHTML=tens;


})

function startTimer(){
    seconds++;
    if(seconds<=9){
        getseconds.innerHTML='0'+ seconds;
    }
    if(seconds > 9){
        getseconds.innerHTML= seconds;
    }
    if(seconds > 99){
        tens++;
        gettens.innerHTML='0' + tens ;
        seconds=0;
        getseconds.innerHTML='0' + 0;
    }
    if(tens> 9){
        gettens.innerHTML = tens ;
    }


}