let score = 0
let clicksPerSec = 1
let clickPowerCost = 10
let upgrade2Cost = 100
let autoClicks = 0

const autoCostText = document.querySelector("#cost2")
const autoPowerText = document.querySelector("#autoPower")

const scoreText = document.querySelector
    ("#score")
const upgradetext = document.querySelector("#cost1")

document.querySelector("#click").addEventListener("click",()=>{
    score += clicksPerSec;
    scoreText.textContent = score;
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    if (score <clickPowerCost) return;
    score -=clickPowerCost;
    console.log(clicksPerSec)
    clicksPerSec += 1;
    clickPowerCost *= 2
    upgradetext.textContent = clickPowerCost;
    scoreText.textContent = score;
    
})

document.querySelector("#upgrade2").addEventListener("click",()=>{
    if (score < upgrade2Cost) return;
    score -= upgrade2Cost;
    upgrade2Cost *= 2
    
    autoCostText.textContent = upgrade2Cost;
    autoPowerText.textContent = autoClicks;
    scoreText.textContent = score;
    
    
})




setInterval(()=>{
    score += autoClicks;
    scoreText.textContent = score;
}, 1000)
