//Find the parts of the page we want to use
const form = document.querySelector("form");

const nameInput = document.querySelector("#type");
const classInput = document.querySelector("#class");
const colorInput = document.querySelector("#color");
const itemInput = document.querySelector("#item");




const characterCard = document.querySelector("#character-card");
const cardName = document.querySelector("#card-name");
const cardClass = document.querySelector("#card-class");
const cardItem = document.querySelector("#card-item");


form.addEventListener("submit"), function(event) {
    console.log("asdasf")
    event.preventDefault();
    cardName.innerText = nameInput.value;
    cardClass.innerText = classInput.value;
    cardItem.innerText = ItemInput.value;
    
    // Change the card color
    characterCard.style.backgroundColor = colorInput.value
    
    // Show the character card
    characterCard.hidden = false;
}
