let answer = Math.floor(Math.random() *100)+1;
let score = 0
console.log(answer)
const guessInput = document.querySelector("#guess")
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector("#score")
const checkButton = document.querySelector("#check")
const highDisplay = document.querySelector("#highscore")
const resetButton = document.querySelector("#reset")
let highscore = 0;
checkButton.addEventListener("click",() => {
    const guess =Number(guessInput.value);
    guessInput.value ="";
    if (guess === answer){
        score += 1;
        scoreDisplay.textContent = score;
        if (score > highscore){
            highscore = score;
            highDisplay.textContent = highscore
        }
        result.textContent = `Correct`;
        answer = Math.floor(Math.random() *100)+1
    }else if(guess < answer){
        result.textContent = "Too low. Try Again";
    }
    else{
        result.textContent = "Too high. Try Again";
    }
    
})
resetButton.addEventListener("click",()=>{
    score = 0;
    scoreDisplay.textContent = score;
    answer = Math.random() * 100
    answer = Math.floor(answer) + 1
    result.textContent = "A new number was picked make your guess";
    guessInput.value ="";
})
