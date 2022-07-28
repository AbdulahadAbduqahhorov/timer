let minutes = 0;
let seconds = 0;
let tens = 0;
let getMinutes = document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds')
let getTens = document.querySelector('.tens')
let btnStart = document.querySelector('.start')
let btnStop = document.querySelector('.stop')
let btnReset = document.querySelector('.reset')
let btnRecord = document.querySelector('.record')
let interval
btnStart.addEventListener('click',()=>{
   clearInterval(interval)
    interval = setInterval(startTimer,10)

})
btnStop.addEventListener("click",()=>{
    clearInterval(interval)

})
btnReset.addEventListener("click",()=>{
    clearInterval(interval)
    tens = '00'
    seconds = '00'
    minutes = '00'
    getMinutes.innerHTML = minutes
    getSeconds.innerHTML = seconds
    getTens.innerHTML = tens
    document.getElementById('tbody').innerHTML=""



})
btnRecord.addEventListener('click',()=>{


    console.log(getMinutes.innerHTML,getSeconds.innerHTML,getTens.innerHTML)
    let row = document.createElement('tr')
    let data = document.createElement('td')
    data.innerHTML = getMinutes.innerHTML + ":" + getSeconds.innerHTML + ":" + getTens.innerHTML
    row.appendChild(data)
    document.getElementById('tbody').appendChild(row)
})

function startTimer(){
    tens++
    if(tens<=9){
        getTens.innerHTML = '0' + tens
    }
    if (tens>9){
        getTens.innerHTML = tens
    }
    if (tens>99){
        seconds++
        getSeconds.innerHTML = '0' + seconds
        tens = 0
        getTens.innerHTML = '0' + 0

    }
    if (seconds>9){
        getSeconds.innerHTML = seconds
    }
    if(seconds>59){
        minutes++
        getMinutes.innerHTML = '0' + minutes
        seconds = 0
        getSeconds.innerHTML = '0' + 0
    }
    if (minutes>9){
        getMinutes.innerHTML = minutes
    }


}