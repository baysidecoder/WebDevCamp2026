//array- list of objects
let responses =[
    "yes",
    "no",
    "maybe",
    "ask again later",
    "definitely!",
    "i don't know", 
    "?"
    
    ]
function shakeball(){
    const question = document.getElementById("question").value;
    if (question.trim()===""){
        alert("please ask a question");
        return; //exit function
    }
    const ball = document.getElementById("ball")
    ball.classList.remove("shake")
    //make ball shake
    
    //restart animation
    
    void ball.offsetwidth
    ball.classList.add("shake")
    let randomIndex = Math.random() * responses.length;
    randomIndex= Math.floor(randomIndex); //takes the lower number
    const answer= responses[randomIndex];
    document.getElementById("answer").innerText = answer;
}
