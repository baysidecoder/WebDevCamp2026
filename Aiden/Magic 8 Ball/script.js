let responses = [
    "yes",
    "no",
    "maybe?",
    "nuh uh",
    "guess so?",
    ]
function shakeBall(){
    const question = document.getElementById("question").value;
    
    if (question.trim() === ""){
        alert("Pls ask a question");
        return; //exit function
    }
    let randomIndex = Math.random() * responses.length;
    randomIndex = Math.floor(randomIndex);
    const answer = responses[randomIndex];
    document.getElementById("answer").innerText = answer;
}
