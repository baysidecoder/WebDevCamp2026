let responses = [
    "yes",
    "no",
    "maybe",
    "idk",
    "I don't know",
    "ask again later",
    "definitely!",
    "Absolutely not",
    ]
    function shakeBall(){
        const question = document.getElementById("question").value;
        
        if (question.trim() ===""){
            alert("Please ask a question");
            return; //exit function
        }
        let randomIndex = Math.random() *responses.length;
        randomIndex = Math.floor(randomIndex); //takes the lower number
        const answer = responses[randomIndex]
        document.getElementById("answer").innerText = answer;
    }
