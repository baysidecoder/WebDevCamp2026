let score =0
let clickpersec = 1

const scoreText = document.querySelector("#score");
document.querySelector("#click").addEventListener("click",()=>{
    score+= 1;
    scoreText.textContent = score;
    
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    if(score<10) return;
    score -=10;
    clickpersec = 2;
    scoreTextContent = score;
})
