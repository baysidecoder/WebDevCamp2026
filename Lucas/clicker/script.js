let score = 0
let clicksPerSec = 1

const scoreText = document.querySelector("#score");
document.querySelector("#click").addEventListener("click",()=>{
    score += 1;
    scoreText.textContent = score;
    console.log("dasikdgas")
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    if (score <10) return
    score -= 10;
    clicksPerSec = 2
    scoreText.textContent = score;
})
