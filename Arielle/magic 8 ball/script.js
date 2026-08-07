//Array-list of objects
let responses = [    "Yes","No","Maybe","IDK"    ]
function shakeball(){
     const question = document.getElementById("question").value;
     
     if (question.trim() ===""){
        alert("please ask a question");
        return; //exit function
         
     }
     let randomIndex = Math.random() * responses.length
     randomIndex = Math.floor(randomIndex); //takes the lower number
     const answer = responses[randomIndex];
     document.getElementById("answer").innerText = answer;
}
