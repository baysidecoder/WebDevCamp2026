//Array- list of objects
let responses = [
    "Yes",
    "No",
    "Shake again",
    "Maybe",
    "Ask again later",
    "Definitely",
    "Absolutely not",
    "I don't know",
    "Signs point to yes",
    "Very unlikely",
    "Without a doubt",
    "I can't answer that",
    ]
function shakeBall(){
    const question = document.getElementById("question").value;
    
    if (question.trim() === ""){
        alert("Please ask a question");
        return; //exit funtion
    }
    let randomIndex = Math.random() * responses.length; 
    randomIndex = Math.floor(randomIndex); //takes lower number
    const answer = responses[randomIndex];
    document.getElementById("answer").innerText = answer;

}
