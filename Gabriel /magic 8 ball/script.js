//array- list of objects
let responses = {
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Definitely"
    "Absolutely not !",
    "I don't know",
    "Signs point to yes",
    "Very unlikely",
    "Without a doubt"[
    function shakeBall(){
        const question = document.getElementbyId(question).value;
        
        if (question.trim() === ""){
            alert("please ask a question")
            return; //exit function
        }
    }
}
    let randomIndex = Math.random() * responses.length
    randomIndex = Math.floor(randomIndex); //takes the lower number
    const answer = responses[randomIndex];
    document.getElementbyId("answer").innerText = answer;
