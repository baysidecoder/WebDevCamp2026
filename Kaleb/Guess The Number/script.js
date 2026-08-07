let Answer = Math.floor(Math.random())
let score = 0

const guessInput = document.querySelector("#guess")
const result = document.querySelector("#result")
const scoreDisplay = document.querySelector("#score")
const checkbutton = document.querySelector("#check")


checkbutton.addEventListener("click",() =>  {
    const guess =Number(guessInput.value);
    
    if(guess === Answer){
        score += 1;
        result.textContent = 'Correct';
        Answer = Math.floor (Math.random(Math.random() *100))+1
    }else if(guess < Answer){
        result.textContent = "too low. Try Again";
    
        
    }else {
        result.textContent = "too low. Try Again";
    }
    })
