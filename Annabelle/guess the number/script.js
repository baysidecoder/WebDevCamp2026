let answer = Math.floor(Math.random() *100)+1;
let score =0 
console.log(answer)
const guessInput = document.querySelector("#guess")
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector("#score")
const checkbutton = document.querySelector("#check")

checkbutton.addEventListener("click",()=> {
    const guess =Number(guessInput.value);
    if (guess=== answer){
        score +=1;
        scoreDisplay.textContent = score;
        result.textContent = 'Correct';
        answer = Math.floor(Math.random() *100)+1
        
    }else if(guess<answer){
        result.textContent = "too low. Try Again";
        
 }
 else{
      result.textContent = "too high. Try Again";
 }
})
