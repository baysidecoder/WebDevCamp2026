let score = 0;
let clickspersec = 1;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scoreText = document.querySelector("#score")
document.querySelector("#click").addEventListener("click",()=>{
    score += 1;
    scoreText.textContent = score;
})

document.querySelector("#upgrade").addEventListener("click",()=>{
    if (score <10) return;
    score -= 10;
    clickspersec += clickspersec;
    scoreText.textContent = score;
})

async function processSequentially() {
    while(true) {
      await sleep(1000);
      score += clickspersec - 1;
      scoreText.textContent = score;
    }
}

processSequentially();
