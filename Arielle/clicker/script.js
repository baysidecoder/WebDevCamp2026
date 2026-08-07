let score = 0
let clickspersecond = 1

const scoreText = document.querySelector("#score");
document.querySelector("#click").addEventListener("click",()=>{
    score += 1;
    scoreText.textContent = score;
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    if (score<15) return;
    score -= 15,
    clicksPersec = 1;
    scoreText.textcontent = score;
})
