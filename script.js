const hexColor=document.querySelector("h1")
const startChangingColor=document.querySelector("#start")
const stopColor=document.querySelector("#stop")

const randomColor=function(){
    const hex="0123456789ABCDEFG"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId
startChangingColor.addEventListener("click",()=>{
    if(!intervalId){
        intervalId= setInterval(changeColor,1000)
    }
    function changeColor(){
        document.body.style.backgroundColor=randomColor()
        hexColor.textContent=randomColor()
    }  
    
})
stopColor.addEventListener("click",()=>{
    clearInterval(intervalId)
    intervalId=null
    
})
