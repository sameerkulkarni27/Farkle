let selected = [];

function rollDice() {
    const diceImages = document.getElementById("diceImages");
    diceImages.innerHTML = '';

    for (var i = 0; i < 6; i++) {
        let diceRoll = Math.floor(Math.random() * 6 + 1);

        let src = "images/" + diceRoll + ".png";

        let image = document.createElement("img");
        image.src = src;
        image.alt = "Dice " + diceRoll;
        
        image.setAttribute("diceNumber", diceRoll);

        image.addEventListener("click", handleClick);

        diceImages.appendChild(image);
    }
}

function handleClick(event) {
    let number = event.target.getAttribute("diceNumber");

    event.target.classList.toggle("selected");
    
    if (event.target.classList.contains("selected")) {
        selected.push(number);
    }
    else {
        let index = selected.indexOf(number);
        if (index > -1) {
            selected.splice(index, 1);
        }
    }

    //console.log(selected);
}

function getScore() {
    
}