let answer = Math.floor(Math.random() * 100) + 1;
let score = 0;

console.log(answer);

const guessInput = document.querySelector("#guess");
const result = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const checkButton = document.querySelector("#check");

checkButton.addEventListener("click", () => {
    const guess = Number(guessInput.value);

    if (guess === answer) {
        score++;
        scoreDisplay.textContent = score;
        result.textContent = "Correct!";
        answer = Math.floor(Math.random() * 100) + 1;
    } else if (guess < answer) {
        result.textContent = "Too low. Try again.";
    } else {
        result.textContent = "Too high. Try again.";
    }
});
