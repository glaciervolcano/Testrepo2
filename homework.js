let count=0;

document.getElementById("increaseButton").onclick=function(){
    count+=1;  
    document.getElementById("countLabel").innerHTML=count;
    updatedCounter()
}
document.getElementById("resetButton").onclick= function(){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
    updatedCounter()
}
document.getElementById("decreaseButton").onclick= function(){
    count-=1;
    document.getElementById("countLabel").innerHTML=count;
    updatedCounter()
}

function updatedCounter(){
const counterValue=document.getElementById("countLabel")
const decreaseBtn=document.getElementById("decreaseButton")
const increaseBtn=document.getElementById("increaseButton")
const shippingMessage=document.getElementById("shipping-message")
const noStockMessage=document.getElementById("nostock-message")
if (count===0){
    decreaseBtn.disabled=true
}else{
    decreaseBtn.disabled=false
}

if (count>=10){
    shippingMessage.style.display='block'
}else{
    shippingMessage.style.display='none'
}
if (count>=20){
    increaseBtn.style.backgroundColor='red'
    noStockMessage.style.display='block'
    shippingMessage.style.display='none'
}else{
    increaseBtn.style.backgroundColor=''
    noStockMessage.style.display='none'

}
}

updatedCounter()
