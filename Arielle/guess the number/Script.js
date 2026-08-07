let answer= Math.floor(Math.random() *100)+1;
let score=0
console.log(answer)
const guessInput = document.querySelector("#guess")
const result = document.querySelector("#result")
const scoredisplay = document.querySelector("#score")
const checkbutton = document.querySelector("#check")
const highDisplay = document.querySelector("#Highscore")
let highscore = 0
checkbutton.addEventListener("click",() =>{
     const guess =Number(guessInput.value);
     
     if(guess === answer){
        score += 1;
        scoredisplay.textContent = score;
        result.textContent = 'Correct';
    if (score > highscore){
       
        highscore = score
        highDisplay.textContent = highscore
    }
        answer = Math.floor(Math.random() *100)+1
     }else if(guess < answer){
         result.textContent = "too low. Try Again"
     }
     else{
         result.textContent = "too high. Try Again"
     }
})
