let score = 0
let clicksPerSec = 1
let clickPowerCost = 10
let upgrade2Cost = 100
letautoClicks = 0

const autoCostText = document.querySelector("#cost2")
const autoPowerText = document.querySelector("#autoPower")



const scoreText = document.querySelector("#score")
const upgradeText = document.querySelector("#cost1")
document.querySelector("#click").addEventListener("click",()=>{
    score += clicksPerSec;
    scoreText.textContent = score;
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    console.log('dbrogd')
    if (score <clickPowerCost) return;
    score -= clickPowerCost;
    clicksPerSec += 1
    clickPowerCost *= 2
    upgradeText.textContent = clickPowerCost;
    scoreText.textContent = score;

})

document.querySelector("#autoclicker").addEventListener("click",()=>{
    if(score < upgrade2Cost) return;
    score -= upgrade2Cost;
   upgrade2Cost *= 2 // putany num you want
   autoCostText.textContent = upgrade2Cost;
   autoPowerText.textContent = autoClicks;
   scoreText.textContent = score;
   
})
setInterval(()=>{
    score += autoClicks;
    scoreText.textContent = score;
} , 1000)
