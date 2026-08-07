let answer = Math.floor(Math.random() *100)+1;
let score = 0
cnosole.log(answer)
const guessInput = document.querySelector("#guess")
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector("#score")
const checkButton = document.querySelector("#check")

checkButton.addEventListener("click",() => {
    const guess =Number(guessInput.value);
    
    if (guess === answer){
        score += 1;
        scoreDisplay.textContent = score;
        result.textContent = `Correct`;
        answer = Math.floor(Math.random() * 100)+1
    }else if(guess < answer){
        result.textContent = "too low!";
    }
    else{
        result.textContent = "too high!"
    }
